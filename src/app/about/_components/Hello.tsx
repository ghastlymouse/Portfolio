import { RiComputerLine } from "react-icons/ri";
import { FaPeopleCarryBox } from "react-icons/fa6";

const Hello = () => {
  return (
    <section className="mt-20 h-screen">
      <div className="flex flex-col gap-20">
        <div className="flex flex-col items-center">
          <span className="text-[200px] font-semibold">Hello World!</span>
          <p className="text-5xl">
            솔직함과 실행력을 갖춘 개발자
            <span className="text-7xl text-violet-500 font-semibold">
              {" "}
              정현욱
            </span>
            이라고 합니다~!
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-10 text-2xl">
          <div className="bg-white bg-opacity-60 border-2 rounded-lg shadow-custom w-full p-4">
            <p className="text-4xl leading-8 flex items-end gap-2">
              개발자 특성 <RiComputerLine size={40} color="gray" />
            </p>
            <ul className="*:before:content-['○']">
              <li>
                무엇이든 직접 부딪혀 경험하며, 빠르게 실행에 옮기는
                스타일입니다.
              </li>
              <li>
                단순한 기능 구현을 넘어, 사용자 경험과 코드의 완성도를 높이는 데
                가치를 둡니다.
              </li>
              <li>최대한 구글링을 활용합니다.</li>
            </ul>
          </div>
          <div className="bg-white bg-opacity-60 border-2 rounded-lg shadow-custom w-full p-4">
            <p className="text-4xl leading-8 flex items-end gap-2">
              협업 스타일
              <FaPeopleCarryBox size={40} color="green" />
            </p>
            <ul className="*:before:content-['○']">
              <li>혼자 해결할 수 없는 문제는 지체 없이 도움을 요청합니다.</li>
              <li>명확한 커뮤니케이션을 우선시하며,</li>
              <li>
                완성된 결과물을 공유하고 피드백을 적극 반영하는 과정을 즐깁니다.
              </li>
              <li>소통을 통해 더 나은 결과를 만들어내는 데 집중합니다.</li>
              <li>
                팀과의 협력을 통해 최적의 해결책을 찾아가는 과정이 중요하다고
                생각합니다.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hello;
