import { SkillCardType } from "@/app/type/skillCardType";

const SkillCard = (skillInfo: SkillCardType) => {
  const { title, titleIcon, skills, colors, icons } = skillInfo;

  return (
    <div className="bg-white bg-opacity-60 border-2 rounded-lg shadow-custom w-96 p-4">
      <div className="flex items-start gap-1 pb-8">
        {titleIcon}
        <span className="text-3xl">{title}</span>
      </div>
      <div className="mb-8">
        {skills.map((skill, idx) => (
          <div key={skill} className="mb-8">
            <div
              className="flex items-center gap-2 text-2xl"
              style={{
                color: colors[idx],
              }}
            >
              {icons[idx]}
              {skill}
            </div>
            <div className="w-full h-[1px] bg-gray-500 shadow-custom shadow-gray-100"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
