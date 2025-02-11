import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

const LinkCard = () => {
  return (
    <div className="flex gap-2 w-11/12">
      <Link
        href={"/about"}
        className="bg-white bg-opacity-60 h-96 border-2 rounded-lg shadow-custom w-1/2 p-4 flex flex-col justify-between hover:scale-110 hover:shadow-hover transition-transform duration-300 ease-in-out"
      >
        <div>
          <span className="text-7xl">ABOUT</span>
        </div>
        <div>
          <div>
            <p>저를 소개하는 페이지입니다!</p>
            <p>개발에 대한 가치관, 링크 및 기술스택을 확인하실 수 있습니다!</p>
          </div>
          <div className="flex justify-end items-end">
            <span className="text-4xl leading-8">더 알아보기</span>
            <FaLongArrowAltRight size={40} />
          </div>
        </div>
      </Link>
      <Link
        href={"/projects"}
        className="bg-white bg-opacity-60 h-96 border-2 rounded-lg shadow-custom w-1/2 p-4 flex flex-col justify-between hover:scale-110 hover:shadow-hover transition-transform duration-300 ease-in-out"
      >
        <div>
          <span className="text-7xl">PROJECTS</span>
        </div>
        <div>
          <p>제가 진행했던 과제 및 프로젝트들을 확인하실 수 있습니다!</p>
          <div className="flex justify-end items-end">
            <span className="text-4xl leading-8">더 알아보기</span>
            <FaLongArrowAltRight size={40} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default LinkCard;
