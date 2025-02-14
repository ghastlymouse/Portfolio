import { BsBack } from "react-icons/bs";
import { RiSupabaseFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { SkillCardType } from "@/app/type/skillCardType";

export const BACKEND_SERVICES_SKILLS: SkillCardType = {
  title: "Back End & Service",
  titleIcon: (
    <BsBack
      size={32}
      style={{ filter: "drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.6))" }}
    />
  ),
  skills: ["Supabase", "Firebase"],
  colors: ["#3ECF8E", "#FFCA28"],
  icons: [
    <RiSupabaseFill
      key="supabase"
      size={32}
      style={{ filter: "drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.6))" }}
    />,
    <IoLogoFirebase
      key="firebase"
      size={32}
      style={{ filter: "drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.6))" }}
    />,
  ],
};
