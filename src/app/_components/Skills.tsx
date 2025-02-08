import { BsFront } from "react-icons/bs";
import { FaPaintBrush } from "react-icons/fa";
import { FaArrowsRotate } from "react-icons/fa6";
import { BsBack } from "react-icons/bs";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiStyledcomponents } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { SiReactquery } from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";

const Skills = () => {
  return (
    <section>
      <p className="flex justify-center text-5xl font-semibold pt-20 pb-10">
        Skills
      </p>
      <div className="grid grid-cols-[200px_minmax(0,_1fr)] gap-x-4 items-center">
        <div className="flex flex-col gap-2">
          <div className="flex items-center">
            <BsFront /> Front End
          </div>
          <div className="flex items-center">
            <FaPaintBrush /> Styling
          </div>
          <div className="flex items-center">
            <FaArrowsRotate /> State Management
          </div>
          <div className="flex items-center">
            <BsBack /> Back End & Service
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <div className="flex items-center rounded p-1 text-sm bg-[#E34F26]">
              <FaHtml5 />
              HTML5
            </div>
            <div className="flex items-center rounded p-1 text-sm bg-[#1572B6]">
              <IoLogoCss3 />
              CSS3
            </div>
            <div className="flex items-center rounded p-1 text-sm text-black bg-[#F7DF1E]">
              <SiJavascript />
              JavaScript
            </div>
            <div className="flex items-center rounded p-1 text-sm text-black bg-[#3178C6]">
              <SiTypescript />
              TypeScript
            </div>
            <div className="flex items-center rounded p-1 text-sm text-black bg-[#61DAFB]">
              <FaReact />
              React
            </div>
            <div className="flex items-center rounded p-1 text-sm bg-[#000000]">
              <RiNextjsFill />
              Next.js
            </div>
          </div>
          <div className="flex gap-2">
            <div className="flex items-center rounded p-1 text-sm bg-[#DB7093]">
              <SiStyledcomponents />
              Styled-Components
            </div>
            <div className="flex items-center rounded p-1 text-sm bg-[#38B2AC]">
              <RiTailwindCssFill />
              Tailwind CSS
            </div>
          </div>
          <div className="flex gap-2">
            <div className="flex items-center rounded p-1 text-sm text-black bg-[#764ABC]">
              <SiRedux />
              Redux
            </div>
            <div className="flex items-center rounded p-1 text-sm text-black bg-[#FFB366]">
              Zustand
            </div>
            <div className="flex items-center rounded p-1 text-sm bg-[#FF4154]">
              <SiReactquery />
              React-Query
            </div>
          </div>
          <div className="flex gap-2">
            <div className="flex items-center rounded p-1 text-sm text-black bg-[#3ECF8E]">
              <RiSupabaseFill />
              Supabase
            </div>
            <div className="flex items-center rounded p-1 text-sm text-black bg-[#FFCA28]">
              <IoLogoFirebase />
              Firebase
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
