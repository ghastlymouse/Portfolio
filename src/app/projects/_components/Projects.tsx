"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [selected, setSelected] = useState("all");
  return (
    <section className="flex flex-col gap-10 justify-center items-center">
      <p className="text-[200px]">Projects</p>
      <span className="text-5xl">
        제가 진행한 프로젝트 및 과제를 확인해보세요!
      </span>
      <div className="w-3/4 grid grid-cols-3 gap-x-10 text-3xl">
        <button
          className={`${selected === "all" ? "text-red-600" : "text-black"}`}
          onClick={() => setSelected("all")}
        >
          전체 프로젝트
        </button>
        <button
          className={`${
            selected === "personal" ? "text-red-600" : "text-black"
          }`}
          onClick={() => setSelected("personal")}
        >
          개인 프로젝트
        </button>
        <button
          className={`${selected === "team" ? "text-red-600" : "text-black"}`}
          onClick={() => setSelected("team")}
        >
          팀 프로젝트
        </button>
      </div>
      <div className="w-3/4 bg-black h-[1px]"></div>
      <div className="grid grid-cols-3 gap-x-10">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
};

export default Projects;
