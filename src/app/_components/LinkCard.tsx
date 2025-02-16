import TransitionCard from "./TransitionCard";

const LinkCard = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-2 w-11/12">
      <TransitionCard
        href="/about"
        label="ABOUT"
        description={[
          "저를 소개하는 페이지입니다!",
          "개발에 대한 가치관, 링크 및 기술스택을 확인하실 수 있습니다!",
        ]}
      />
      <TransitionCard
        href="/projects"
        label="PROJECTS"
        description={[
          "제가 진행했던 과제 및 프로젝트들을 확인하실 수 있습니다!",
        ]}
      />
    </div>
  );
};

export default LinkCard;
