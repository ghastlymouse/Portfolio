import { SkillCardType } from "@/app/type/skillCardType";
import { FaArrowsRotate } from "react-icons/fa6";
import { SiRedux } from "react-icons/si";
import { SiReactquery } from "react-icons/si";

export const STATE_MANAGEMENT_SKILLS: SkillCardType = {
  title: "State Management",
  titleIcon: (
    <FaArrowsRotate
      size={32}
      style={{ filter: "drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.6))" }}
    />
  ),
  skills: ["Redux", "Zustand", "React-Query"],
  colors: ["#764ABC", "#FFB366", "#FF4154"],
  icons: [
    <SiRedux
      key="redux"
      size={32}
      style={{ filter: "drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.6))" }}
    />,
    <FaArrowsRotate
      key="zustand"
      size={32}
      style={{ filter: "drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.6))" }}
    />,
    <SiReactquery
      key="react-query"
      size={32}
      style={{ filter: "drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.6))" }}
    />,
  ],
};
