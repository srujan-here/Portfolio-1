import Head from "next/head";
import Link from "next/link";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Header } from "../components/Header";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { Srujan } from "../components/Srujan";
import { WorkExperience } from "../components/WorkExperience";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] h-screen snap snap-mandatory overflow-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Srujan's Porfolio</title>
      </Head>

      {/* Navbar */}
      <Header id="1" />
      {/* Srujan */}
      <section id="srujan" className="snap-start">
        <Srujan />
      </section>
      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}

      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      <section id="skill" className="snap-start">
        <Skills />
      </section>
      {/* Projects */}

      <section id="projects" className="snap-start">
        <Projects />
      </section>
      {/* Contact me */}


      <section id="contact" className="snap-start">
        <Contact />
      </section>

      {/* <Link href='#srujan'> */}
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className=" flex items-center justify-center">
            <img className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer" src="https://cdn.pixabay.com/photo/2017/05/11/12/24/green-2304008__480.png" alt="" />

          </div>
        </footer>
      {/* </Link> */}


    </div>
  );
}
