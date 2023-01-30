import Head from "next/head";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Header } from "../components/Header";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { Srujan } from "../components/Srujan";
import { WorkExperience } from "../components/WorkExperience";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] h-screen snap snap-mandatory overflow-scroll">
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
    </div>
  );
}
