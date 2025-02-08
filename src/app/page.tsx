import About from "@/app/_components/About";
import Hello from "@/app/_components/Hello";
import Skills from "@/app/_components/Skills";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center mt-20 mb-40">
      <Hello />
      <About />
      <Skills />
    </main>
  );
}
