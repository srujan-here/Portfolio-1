import { motion } from "framer-motion";
import React from "react";
import { TSkill } from "../typings";
import Skill from "./Skill";

interface Props {
  skills:TSkill[]
}

const Skills = ({skills}: Props) => {
  return (
    <motion.div className="flex text-white relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm mb-10">
        Hover over a skill for currency proficiency
      </h3>
      <div className="grid grid-cols-4 gap-5">
        {skills?.slice(0,skills.length/2).map((data)=>(
          
          <Skill key={data._id} skill={data} />
        ))}

         {skills?.slice(skills.length/2,skills.length).map((data)=>(
          
          <Skill key={data._id} skill={data} directionleft />
        ))}
       
      </div>
    </motion.div>
  );
};

export default Skills;
