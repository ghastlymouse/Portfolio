import About from "./_components/About";
import Hello from "./_components/Hello";
import Skills from "./_components/Skills";

const AboutPage = () => {
  return (
    <main className="flex flex-col justify-center items-center mt-20 mb-40">
      <Hello />
      <About />
      <Skills />
    </main>
  );
};

export default AboutPage;
