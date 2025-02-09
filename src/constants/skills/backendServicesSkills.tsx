import { BsBack } from "react-icons/bs";
import { RiSupabaseFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";

export const BACKEND_SERVICES_SKILLS = {
  title: "Back End & Service",
  titleIcon: <BsBack size={32} />,
  skills: ["Supabase", "Firebase"],
  colors: ["#3ECF8E", "#FFCA28"],
  icons: [
    <RiSupabaseFill key="supabase" size={32} />,
    <IoLogoFirebase key="firebase" size={32} />,
  ],
};
