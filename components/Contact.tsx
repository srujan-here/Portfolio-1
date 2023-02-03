import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

interface Props {}

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export const Contact = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div
      className="text-white h-screen flex relative flex-col text-center md:text-left md:flex-row
        max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className=" flex flex-col space-v-10">
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need.
          <span className="decoration-[#c5e9cb]/50 underline">Lets Talk</span>
        </h4>

        <div className="space-y-10 my-5">
          <div className="flex items-center space-x-5 justify-center">
           
            <PhoneIcon className="text-[#c5e9cb] h-7 w-7 animate-pulse" />
            <div className="text-2x1">+1234567890</div>
          </div>
          <div className="flex items-center space-x-5 justify-center">
          
            <EnvelopeIcon className="text-[#c5e9cb] h-7 w-7 animate-pulse" />
            <div className="text-2xl">envelope</div>
          </div>
          <div className="flex items-center space-x-5 justify-center">

            <MapPinIcon className="text-[#c5e9cb] h-7 w-7 animate-pulse" />

          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />

          <button
            type="submit"
            className="bg-[#e8d73c] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
