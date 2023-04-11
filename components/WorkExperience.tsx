import React from "react";
import { ExperienceCard } from "./ExperienceCard";
import { Experience } from "../typings";

interface Props {
  experience: Experience[];
}

export const WorkExperience = ({ experience }: Props) => {
  return (
    <div className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl mb-10">
        Experience
      </h3>
      {/* <div className="w-full  flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory mt-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {experience.map((data) => (
          <ExperienceCard key={data._id} experience={data} />
        ))}
      </div> */}
    </div>
  );
};
