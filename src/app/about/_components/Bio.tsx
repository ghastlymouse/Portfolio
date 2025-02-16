import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { SiTistory, SiVelog } from "react-icons/si";

const Bio = () => {
  return (
    <div className="pt-20 grid grid-cols-3 gap-x-2">
      <Link
        href={"https://github.com/ghastlymouse"}
        target="_blank"
        className="border-2 rounded-lg p-10 bg-[#A67BC1]"
      >
        <div className="flex flex-col justify-center items-center">
          <BsGithub size={80} />
          <p>Github</p>
        </div>
      </Link>
      <Link
        href={"https://gamasod.tistory.com/"}
        target="_blank"
        className="border-2 rounded-lg p-10 bg-[#FF5722]"
      >
        <div className="flex flex-col justify-center items-center">
          <SiTistory size={80} />
          <p>TiStory</p>
        </div>
      </Link>
      <Link
        href={"https://velog.io/@ghastlymouse/posts"}
        target="_blank"
        className="border-2 rounded-lg p-10 bg-[#20C997]"
      >
        <div className="flex flex-col justify-center items-center">
          <SiVelog size={80} />
          <p>Velog</p>
        </div>
      </Link>
    </div>
  );
};

export default Bio;
