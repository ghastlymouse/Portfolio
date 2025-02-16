"use client";

import Bio from "./Bio";
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
        <Bio />
      </div>
    </section>
  );
};

export default ScrollAnimation;
