import SkillCard from "./SkillCard";
import { FRONTEND_SKILLS } from "@/constants/skills/frontendSkills";
import { STYLING_SKILLS } from "@/constants/skills/stylingSkills";
import { STATE_MANAGEMENT_SKILLS } from "@/constants/skills/stateManagementSkills";
import { BACKEND_SERVICES_SKILLS } from "@/constants/skills/backendServicesSkills";

const Skills = () => {
  return (
    <section className="h-screen">
      <p className="flex justify-center text-5xl font-semibold pt-20 pb-10">
        My Skills
      </p>
      <div className="grid grid-cols-4 gap-x-10">
        <SkillCard {...FRONTEND_SKILLS} />
        <SkillCard {...STYLING_SKILLS} />
        <SkillCard {...STATE_MANAGEMENT_SKILLS} />
        <SkillCard {...BACKEND_SERVICES_SKILLS} />
      </div>
    </section>
  );
};

export default Skills;
