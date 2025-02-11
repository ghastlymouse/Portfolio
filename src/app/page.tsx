import DevTimeline from "./_components/DevTimeline";
import LinkCard from "./_components/LinkCard";

export default function Home() {
  return (
    <main className="w-full min-h-screen p-12 grid grid-cols-[minmax(820px,_1fr)_minmax(0,_400px)] mb-40">
      <section className="flex flex-col items-end gap-10 pr-20">
        <div className="flex flex-col items-end">
          <span className="text-[200px]">{"현욱's"}</span>
          <span className="text-9xl">포트폴리오</span>
        </div>
        <div className="text-4xl flex flex-col items-end">
          <p>반갑습니다</p>
          <p>
            프론트엔드 개발자 지망생
            <span className="text-violet-500 text-5xl">정현욱</span>
            입니다
          </p>
          <p>저를 소개하는 포트폴리오 사이트에 오신 것을 환영합니다!</p>
        </div>
        <LinkCard />
      </section>
      <DevTimeline />
    </main>
  );
}
