import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { BackgroundCircle } from "./BackgroundCircle";
import { PageInfo } from "../typings";
import { urlfor } from "../sanity";
import Link from "next/link";
import { FaBeer } from "react-icons/fa";
import Image from "next/image";

interface Props {
  pageinfo: PageInfo;
}

export const Srujan = ({ pageinfo }: Props) => {
  const [text, count] = useTypewriter({
    words: [
      `Hi, The Name's ${pageinfo ? pageinfo.name : "Srujan Putta"}`,
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
      <Image
        src={urlfor(pageinfo.heroImage).url()}
        className="relative rounded-full h-28 w-28 mx-auto"
        alt=""
        width="50"
        height="50"
      />
      <h2 className="text-sm uppercase text-gray-400 tracking-[10px]">
        {pageinfo.role}
      </h2>
      <div className="z-20">
        <h1 className="text-white text-4xl lg:text-5xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="red" />
        </h1>
      </div>
      <div className="pt-5 text-gray-500">
        <Link href="#about" className="px-3">
        About
        </Link>
      </div>
    </div>
  );
};
