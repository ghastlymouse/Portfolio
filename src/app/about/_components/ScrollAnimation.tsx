"use client";

import About from "./About";
import Hello from "./Hello";
import Skills from "./Skills";

const ScrollAnimation = () => {
  return (
    <section className="flex flex-col justify-center items-center mb-40">
      <div>
        <Hello />
      </div>
      <div>
        <Skills />
      </div>
      <div>
        <About />
      </div>
    </section>
  );
};

export default ScrollAnimation;
