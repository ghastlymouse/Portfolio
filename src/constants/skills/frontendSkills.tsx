import { BsFront } from "react-icons/bs";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";

export const FRONTEND_SKILLS = {
  title: "Front End",
  titleIcon: (
    <BsFront
      size={32}
      style={{ filter: "drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.6))" }}
    />
  ),
  skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js"],
  colors: ["#E34F26", "#1572B6", "#F7DF1E", "#3178C6", "#61DAFB", "#000000"],
  icons: [
    <FaHtml5
      key="html5"
      size={32}
      style={{ filter: "drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.6))" }}
    />,
    <IoLogoCss3
      key="css3"
      size={32}
      style={{ filter: "drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.6))" }}
    />,
    <SiJavascript
      key="javascript"
      size={32}
      style={{ filter: "drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.6))" }}
    />,
    <SiTypescript
      key="typescript"
      size={32}
      style={{ filter: "drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.6))" }}
    />,
    <FaReact
      key="react"
      size={32}
      style={{ filter: "drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.6))" }}
    />,
    <RiNextjsFill
      key="nextjs"
      size={32}
      style={{ filter: "drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.6))" }}
    />,
  ],
};
