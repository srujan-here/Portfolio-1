import { motion } from "framer-motion";
import React from "react";
import { Experience, TSkill, Technology } from "../typings";
import { urlfor } from "../sanity";
import exp from "constants";

interface Props {
  experience: Experience;
}

export const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className="flex flex-col rounded-l items-center space-y-7 flex-shrink-0 w-[300px] md:mt-3 md:w-[300px] xl:w-[600px] snap-center bg-[#292929] p-5   cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        src={urlfor(experience.companyImage).url()}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center "
      />

      <div className="text-white px-0 md:px-10">
        <h4 className="text-4xl font-light">{experience.jobTitle}</h4>
        <div className="font-bold text-2xl mt-1">{experience.company}</div>
        <div className="flex space-x-2 my-2">
          {experience.technologies.map((technology, i) => (
            <img
              key={i}
              className="h-10 w-10 rounded-full"
              
            />

          ))}
        </div>
        <div className="uppercase py-5 text-gray-300">
          {new Date(experience.dateStarted).toDateString()}-
          {experience.isCurrentlyWorkinghere
            ? "Present"
            : new Date(experience.dateStarted).toDateString()}
        </div>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          {experience.points.map((data, i) => (
            <li key={i}>{data} </li>
          ))}
        </ul>
      </div>
    </article>
  );
};
