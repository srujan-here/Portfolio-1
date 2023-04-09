import Head from "next/head";
import Link from "next/link";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Header } from "../components/Header";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { Srujan } from "../components/Srujan";
import { WorkExperience } from "../components/WorkExperience";
import { GetStaticProps } from "next";
import { PageInfo, Experience, Project, Social, TSkill } from "../typings";
import { fetchExperience } from "../utils/fetchExperience";
import { fetchProject } from "../utils/fetchProjects";
import { fetchSocial } from "../utils/fetchSocials";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchPageInfo } from "../utils/fetchPageInf";
import { FaArrowUp } from "react-icons/fa";

type Props = {
  pageInfo: PageInfo;
  experience: Experience[];
  projects: Project[];
  socials: Social[];
  skills: TSkill[];
};

export default function Home({
  pageInfo,
  experience,
  projects,
  socials,
  skills,
}: Props) {
  const isBrowser = () => typeof window !== "undefined";
  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <div className="bg-[rgb(36,36,36)] h-screen snap snap-mandatory overflow-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Srujan's Porfolio</title>
      </Head>

      {/* Navbar */}
      <Header socials={socials} />
      {/* Srujan */}
      <section id="srujan" className="snap-start">
        <Srujan pageinfo={pageInfo} />
      </section>
      {/* About */}
      <section id="about" className="snap-center">
        <About pageinfo={pageInfo} />
      </section>

      {/* Experience */}

      <section id="experience" className="snap-center">
        <WorkExperience experience={experience} />
      </section>

      <section id="skill" className="snap-start">
        <Skills skills={skills} />
      </section>
      {/* Projects */}

      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>
      {/* Contact me */}

      <section id="contact" className="snap-start">
        <Contact />
      </section>

      {/* <Link href='#srujan'> */}
      <footer className="sticky bottom-5 w-full cursor-pointer">
        <div className=" flex items-center justify-center text-white">
          <Link href="#srujan">
            <FaArrowUp />
          </Link>
        </div>
      </footer>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const projects: Project[] = await fetchProject();
  const experience: Experience[] = await fetchExperience();
  const socials: Social[] = await fetchSocial();
  const skills: TSkill[] = await fetchSkills();

  // console.log(pageInfo);
  return {
    props: {
      pageInfo,
      projects,
      experience,
      socials,
      skills,
    },
    revalidate: 10,
  };
};
