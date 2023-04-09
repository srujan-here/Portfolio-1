import React from "react";
import { motion } from "framer-motion";

type Props = {};

export const BackgroundCircle = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        scale: [1, 2, 2, 3, 1],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border [#333333] rounded-full h-[200px] w-[200px] animate-ping mt-52" />
      <div className="absolute border [#333333] rounded-full h-[600px] w-[600px]   mt-52" />
      <div className="absolute border [#333333] rounded-full h-[600px] w-[600px]  mt-52" />
      <div className="absolute border-2 border-[#F7AB0A] opacity-20 rounded-full h-[800px] w-[800px] animate-pulse  mt-52" />
    </motion.div>
  );
};
