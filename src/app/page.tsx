import LinkCard from "./_components/LinkCard";

export default function Home() {
  return (
    <main className="w-full p-12 grid mb-40">
      <section className="flex flex-col items-center gap-10">
        <div className="flex items-center">
          <span className="sm:text-5xl md:text-7xl lg:text-9xl">
            {"현욱's 포트폴리오"}
          </span>
        </div>
        <div className="sm:text-lg md:text-2xl lg:text-4xl flex flex-col items-start">
          <p>반갑습니다</p>
          <p>
            프론트엔드 개발자 지망생
            <span className="text-violet-500 sm:text-xl md:text-3xl lg:text-5xl">
              정현욱
            </span>
            입니다
          </p>
          <p>저를 소개하는 포트폴리오 사이트에 오신 것을 환영합니다!</p>
        </div>
        <LinkCard />
      </section>
      {/* <DevTimeline /> */}
    </main>
  );
}
