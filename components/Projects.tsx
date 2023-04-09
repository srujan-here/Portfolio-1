import { motion } from "framer-motion";
import React, { ReactElement } from "react";
import { Project } from "../typings";
import { urlfor } from "../sanity";
import Image from "next/image";

interface Props {
  projects: Project[];
}

function Projects({ projects }: Props): ReactElement {
  return (
    
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-white h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
      >
        <h3 className="absolute top-24 uppercase tracking-[20px] text-white text-2xl">
          Projects
        </h3>
        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin  scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
          {projects.map((project, i) => (
            <div
              className="w-screen flex-shrink-0 snap-center flex flex-col space-y-3 items-center justify-center p-20 md:p-48 lg:mb-4 h-screen"
              key={i}
            >
              <motion.img
                initial={{
                  opacity: 0,
                  y: -300,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src={urlfor(project.image).url()}
                alt="m"
                className="h-80 w-200"

              />
              <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className="text-4xl font-semibold text-center">
                  <span className="underline decoration-[#F7AB0A]/50">
                    Make your Ticket {i + 1} of {project.title}:
                  </span>
                  
                </h4>
                <div className="flex space-x-2 items-center justify-center">
                {project.technologies.map((tech)=>(
                  <Image
                  className="h-10 w-10"
                  key={tech._id}
                  src={urlfor(tech.image).url()}
                  alt="m"
                  width="10"
                  height="10"
                  />
                ))}
                </div>
                <div className="text-lg text-center md:text-left">
                  {project.summary}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full absolute top-[30%] bg-[#c5e9cb]/60 left-0 h-[500px]-skew-y-12" />
      </motion.div>
    
  );
}

export default Projects;
