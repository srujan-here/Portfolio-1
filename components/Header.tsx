import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Social } from "../typings";

interface Props {
  socials: Social[];
}

export const Header = ({ socials }: Props) => {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto p-5 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {/* {socials.map((data) => (
          <SocialIcon
            key={data._id}
            url={data.url}
            fgColor="gray"
            bgColor="transparent"
            target="_blank"
          />
        ))} */}
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          network="email"
          className="cursor-pointer"
          fgColor="gray"
          bgColor="transparent"
        />
        <div className="uppercase hidden md:inline-flex text-sm text-gray-300">
          get In Touch
        </div>
      </motion.div>
    </header>
  );
};
