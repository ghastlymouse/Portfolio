import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { SiTistory } from "react-icons/si";
import { SiVelog } from "react-icons/si";

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
          <p>소스코드 저장소</p>
        </div>
      </Link>
      <Link
        href={"https://gamasod.tistory.com/"}
        target="_blank"
        className="border-2 rounded-lg p-10 bg-[#FF5722]"
      >
        <div className="flex flex-col justify-center items-center">
          <SiTistory size={80} />
          <p>기존 공부 내용 기록</p>
        </div>
      </Link>
      <Link
        href={"https://velog.io/@ghastlymouse/posts"}
        target="_blank"
        className="border-2 rounded-lg p-10 bg-[#20C997]"
      >
        <div className="flex flex-col justify-center items-center">
          <SiVelog size={80} />
          <p>신규 기록 중</p>
        </div>
      </Link>
    </div>
  );
};

export default Bio;
