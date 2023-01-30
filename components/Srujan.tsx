import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { BackgroundCircle } from "./BackgroundCircle";

interface Props {}

export const Srujan = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Srujan Putta",
      "Full Stack Developer",
      "<ButLovestoCode />",
      "Repeat!",
    ],
    loop: 5,
    delaySpeed: 2000,
  });

  return (
    <div className="flex flex-col items-center justify-center space-y-7 h-screen overflow-hidden text-white">
      <BackgroundCircle />
      <img
        src="https://media.licdn.com/dms/image/C5603AQHYFuYrPEO1Jw/profile-displayphoto-shrink_400_400/0/1660064870612?e=1680739200&v=beta&t=7M2Rj6CbQ9s3f4HefR5v52lgsiuzRfXPf2j0Pd6r7ig"
        className="relative rounded-full h-32 w-32 mx-auto"
        alt=""
      />
        <h2 className="text-sm uppercase text-gray-400 tracking-[15px]">
          Software Developer
        </h2>
      <div>

      <h1 className="text-white text-4xl lg:text-5xl font-semibold px-10">
        <span className="mr-3">{text}</span>
        <Cursor cursorColor="red" />
      </h1>
      </div>
    </div>
  );
};
