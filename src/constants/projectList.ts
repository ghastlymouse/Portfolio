import { ProjectInfoType } from "@/app/type/projectInfoType";

export const projectList: ProjectInfoType[] = [
  {
    name: "Voyage X",
    member: 6,
    duration: "2024.07 - 2024.08",
    image: "/assets/projectThumbnail/VoyageX_Thumbnail.png",
    description:
      "미래의 우주 여행을 컨셉의 우주 여행 티켓 예약과 관련 굿즈 판매 플랫폼",
    features: [
      "부트캠프 최종 프로젝트 (FE 5명 + 디자이너 1명)",
      "Next.js의 서버 사이드 컴포넌트를 이용한 SEO 최적화",
      "Supabase를 이용한 저렴한 인증 및 백엔드 서비스",
      "토스 페이먼츠 API를 이용한 가결제 기능",
      "Framer-motion으로 모달과 바텀시트 반응형 구현",
      "Zustand를 이용한 보일러 플레이트 감소 및 패키지 용량 절감",
    ],
    techs: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Tanstack-Query",
      "Zustand",
      "Toss Payment API",
    ],
    source: "https://github.com/hyorimhan/voyageX",
  },
];
