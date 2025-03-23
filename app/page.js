import About from "./components/About";
import Experience from "./components/Experience";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import SectionDivider from "./components/Section-divider";
import Skills from "./components/Skills";
import ContactForm from "./components/Contact";
import Project from "./components/Project";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro/>
      <SectionDivider/>
      <About/>
      {/* <Projects/> */}
      <Project/>
      <Skills/>
      <Experience/>
      <ContactForm/>
    </main>
  );
}
