import { FaPaintBrush } from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SkillCardType } from "@/app/type/skillCardType";

export const STYLING_SKILLS: SkillCardType = {
  title: "Styling",
  titleIcon: (
    <FaPaintBrush
      size={32}
      style={{ filter: "drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.6))" }}
    />
  ),
  skills: ["Styled-Components", "Tailwind CSS"],
  colors: ["#DB7093", "#38B2AC"],
  icons: [
    <SiStyledcomponents
      key="styled-components"
      size={32}
      style={{ filter: "drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.6))" }}
    />,
    <RiTailwindCssFill
      key="tailwind-css"
      size={32}
      style={{ filter: "drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.6))" }}
    />,
  ],
};
