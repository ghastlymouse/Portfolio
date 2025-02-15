import { collabStyle, devCharacter } from "@/constants/Character";
import About from "./About";
import Character from "./Character";

const Hello = () => {
  return (
    <section className="mt-20">
      <div className="flex flex-col items-center gap-20">
        <div className="flex flex-col items-center">
          <span className="text-[200px] font-semibold">HELLO WORLD!</span>
          <p className="text-5xl">
            솔직함과 실행력을 갖춘 개발자
            <span className="text-7xl text-violet-500 font-semibold">
              {" "}
              정현욱
            </span>
            이라고 합니다~!
          </p>
        </div>
        <About />
        <div className="grid grid-cols-2 gap-x-10 text-2xl">
          <Character {...devCharacter} />
          <Character {...collabStyle} />
        </div>
      </div>
    </section>
  );
};

export default Hello;
