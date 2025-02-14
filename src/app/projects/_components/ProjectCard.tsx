import { ProjectInfoType } from "@/app/type/projectInfoType";
import Image from "next/image";
import Link from "next/link";
import { FaTools } from "react-icons/fa";

const ProjectCard = (projectInfo: ProjectInfoType) => {
  const {
    name,
    duration,
    member,
    image,
    description,
    techs,
    features,
    source,
  } = projectInfo;
  return (
    <div className="bg-white bg-opacity-60 border-2 rounded-lg shadow-custom w-full p-4 flex flex-col items-start gap-2">
      <h1 className="text-2xl">{name}</h1>
      <div className="text-lg flex gap-2">
        <span>{duration}</span>
        <span>{`(${member}인 프로젝트)`}</span>
      </div>
      <div>
        <Image
          src={image}
          alt={name}
          width={700}
          height={300}
          className="rounded-lg shadow-custom"
        />
      </div>
      <div>{description}</div>
      <div className="relative border-[1px] rounded-lg p-3 break-keep text-clip">
        <span className="absolute top-0 -translate-y-1/2 bg-white">
          <FaTools size={30} />
        </span>
        {techs.map((tech) => (
          <span key={tech} className="inline-block whitespace-nowrap ml-1">
            {tech},
          </span>
        ))}
      </div>
      <ul>
        {features.map((feature) => (
          <li key={feature} className="before:content-['○']">
            {feature}
          </li>
        ))}
      </ul>
      <Link
        href={source}
        target="_blank"
        className="border-2 rounded-lg p-2 hover:bg-black hover:text-white hover:border-black transition-colors duration-300 ease-in-out"
      >
        소스코드
      </Link>
    </div>
  );
};

export default ProjectCard;
