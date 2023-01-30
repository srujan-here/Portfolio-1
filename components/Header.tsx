import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

interface Props {
  id: string;
}

export const Header = (props: Props) => {
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
            duration:1.5
        }}
        className="flex flex-row items-center"
      >
        {/* <h1>Iam a Header</h1> */}

        <SocialIcon
          url="https://twitter.com/This_IsSrujan"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/srujan-here"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/srujan-here/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.youtube.com/channel/UCma97wRUldJ-GSdGOJAf7Sg"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.facebook.com/putta.srujan.5/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.instagram.com/srujan_here_/"
          fgColor="gray"
          bgColor="transparent"
        />
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
          duration:1.5
      }}
      className="flex flex-row items-center">
        <SocialIcon
          network="email"
          className="cursor-pointer"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-300">
          get In Touch
        </p>
      </motion.div>
    </header>
  );
};
