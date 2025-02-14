import { projectList } from "@/constants/projectList";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="flex flex-col gap-10 justify-center items-center">
      <p className="text-[200px]">PROJECTS</p>
      <span className="text-5xl">제가 참여한 프로젝트를 확인해보세요!</span>
      <div className="w-3/4 bg-black h-[1px]"></div>
      <div className="grid grid-cols-2 gap-x-10 gap-y-10 w-3/4">
        {projectList.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
