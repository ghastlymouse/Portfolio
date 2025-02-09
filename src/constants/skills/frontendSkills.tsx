import { BsFront } from "react-icons/bs";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";

export const FRONTEND_SKILLS = {
  title: "Front End",
  titleIcon: <BsFront size={32} />,
  skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js"],
  colors: ["#E34F26", "#1572B6", "#F7DF1E", "#3178C6", "#61DAFB", "#E0E0E0"],
  icons: [
    <FaHtml5 key="html5" size={32} />,
    <IoLogoCss3 key="css3" size={32} />,
    <SiJavascript key="javascript" size={32} />,
    <SiTypescript key="typescript" size={32} />,
    <FaReact key="react" size={32} />,
    <RiNextjsFill key="nextjs" size={32} />,
  ],
};
