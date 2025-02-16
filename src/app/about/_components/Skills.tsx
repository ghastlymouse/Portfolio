import SkillCard from "./SkillCard";
import { FRONTEND_SKILLS } from "@/constants/skills/frontendSkills";
import { STYLING_SKILLS } from "@/constants/skills/stylingSkills";
import { STATE_MANAGEMENT_SKILLS } from "@/constants/skills/stateManagementSkills";
import { BACKEND_SERVICES_SKILLS } from "@/constants/skills/backendServicesSkills";

const Skills = () => {
  return (
    <section className="px-20">
      <p className="flex justify-center text-5xl font-semibold pt-5 pb-10">
        My Skills
      </p>
      <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10">
        <SkillCard {...FRONTEND_SKILLS} />
        <SkillCard {...STYLING_SKILLS} />
        <SkillCard {...STATE_MANAGEMENT_SKILLS} />
        <SkillCard {...BACKEND_SERVICES_SKILLS} />
      </div>
    </section>
  );
};

export default Skills;
