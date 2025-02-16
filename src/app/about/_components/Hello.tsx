import { collabStyle, devCharacter } from "@/constants/Character";
// import About from "./About";
import Character from "./Character";

const Hello = () => {
  return (
    <section className="mt-20 px-20">
      <div className="flex flex-col items-center gap-20">
        <div className="flex flex-col items-center">
          <span className="sm:text-5xl md:text-7xl lg:text-9xl">HELLO!</span>
          <p className="sm:text-xl md:text-3xl lg:text-5xl">
            솔직함과 실행력을 갖춘 개발자
            <span className="sm:text-3xl md:text-5xl lg:text-7xl text-violet-500">
              {" "}
              정현욱{" "}
            </span>
            이라고 합니다~!
          </p>
        </div>
        {/* <About /> */}
        <div className="grid grid-rows-2 lg:grid-cols-2 gap-x-10 gap-y-10 lg:gap-y-0 text-2xl">
          <Character {...devCharacter} />
          <Character {...collabStyle} />
        </div>
      </div>
    </section>
  );
};

export default Hello;
