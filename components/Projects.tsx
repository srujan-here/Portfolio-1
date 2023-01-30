import { motion } from "framer-motion";
import React, { ReactElement } from "react";

interface Props {}

function Projects({}: Props): ReactElement {
  const projects = [1, 2, 3];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="text-white h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects{" "}
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project, i) => (
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 ">
            <motion.img
              initial={{
                opacity: 0,
                y: -300,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="https://cdn.pixabay.com/photo/2021/12/10/08/24/bird-6860047_640.jpg"
              alt="m"
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                UPS clone
              </h4>
              <p className="text-lg text-center md:text-left">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consequatur, eos! Et velit delectus assumenda dolor quos.
                Accusamus dolore dolor iusto nulla inventore rem cumque minus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                eveniet accusamus saepe minus excepturi consectetur a qui
                quaerat voluptate nihil?
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#c5e9cb]/60 left-0 h-[500px]-skew-y-12" />
    </motion.div>
  );
}

export default Projects;
