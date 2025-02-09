import { FaPaintBrush } from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

export const STYLING_SKILLS = {
  title: "Styling",
  titleIcon: <FaPaintBrush size={32} />,
  skills: ["Styled-Components", "Tailwind CSS"],
  colors: ["#DB7093", "#38B2AC"],
  icons: [
    <SiStyledcomponents key="styled-components" size={32} />,
    <RiTailwindCssFill key="tailwind-css" size={32} />,
  ],
};
