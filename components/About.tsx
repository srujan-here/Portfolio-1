import { motion } from "framer-motion";
import React from "react";
import { PageInfo } from "../typings";
import { urlfor } from "../sanity";

interface Props {
  pageinfo:PageInfo
}

export const About = ({pageinfo}: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.2,
      }}
      className="h-screen text-white flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h2 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h2>
      <motion.img
        initial={{
          x: -400,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        src={urlfor(pageinfo.heroImage).url()}
        className="rounded-full -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 object-cover md:rounded-lg md:w-56 md:h-95 xl:w-[500px] xl:h-[500px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a
          <span className="underline decoration-[#F7AB0A]/50"> little </span>
          background
        </h4>
        <div className="text-base">
          {pageinfo?.backgroundInformation}
        </div>
      </div>
    </motion.div>
  );
};
