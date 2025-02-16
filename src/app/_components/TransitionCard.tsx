"use client";

import { pageOutAnimation } from "@/utils/animations";
import { usePathname, useRouter } from "next/navigation";
import { FaLongArrowAltRight } from "react-icons/fa";

type LinkInfo = {
  href: string;
  label: string;
  description: string[];
};

const TransitionCard = ({ href, label, description }: LinkInfo) => {
  const router = useRouter();
  const pathname = usePathname();

  const handlePageChange = () => {
    if (pathname !== href) {
      pageOutAnimation(href, router);
    }
  };
  return (
    <button
      onClick={handlePageChange}
      className="bg-white bg-opacity-60 lg:h-80 border-2 rounded-lg shadow-custom w-full lg:w-1/2 p-4 flex flex-col justify-between hover:scale-110 hover:shadow-hover transition-transform duration-300 ease-in-out"
    >
      <div>
        <span className="sm:text-3xl md:text-3xl lg:text-5xl">{label}</span>
      </div>
      <div className="w-full">
        <div className="flex flex-col items-start">
          {description.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
        <div className="flex justify-end items-end">
          <span className="sm:text-2xl md:text-4xl lg:text-4xl leading-8">
            더 알아보기
          </span>
          <FaLongArrowAltRight size={40} />
        </div>
      </div>
    </button>
  );
};

export default TransitionCard;
