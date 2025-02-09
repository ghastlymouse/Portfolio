import { FaArrowsRotate } from "react-icons/fa6";
import { SiRedux } from "react-icons/si";
import { SiReactquery } from "react-icons/si";

export const STATE_MANAGEMENT_SKILLS = {
  title: "State Management",
  titleIcon: <FaArrowsRotate size={32} />,
  skills: ["Redux", "Zustand", "React-Query"],
  colors: ["#764ABC", "#FFB366", "#FF4154"],
  icons: [
    <SiRedux key="redux" size={32} />,
    null,
    <SiReactquery key="react-query" size={32} />,
  ],
};
