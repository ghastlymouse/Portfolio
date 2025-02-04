import About from "@/components/About";
import Contact from "@/components/Contact";
import Hello from "@/components/Hello";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <Hello />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
