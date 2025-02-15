import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const getBanners = () => {
  return {
    leftBanners: [
      document.getElementById("banner-1"),
      document.getElementById("banner-3"),
    ],
    rightBanners: [
      document.getElementById("banner-2"),
      document.getElementById("banner-4"),
    ],
  };
};

const animateBanner = ({
  elements,
  fromX,
  toX,
  onComplete,
}: {
  elements: (HTMLElement | null)[];
  fromX: number;
  toX: number;
  onComplete?: () => void;
}) => {
  const validElements = elements.filter(Boolean);
  if (validElements.length === 0) return;

  const tl = gsap.timeline();

  tl.set(validElements, {
    display: "block",
    height: "25%",
    xPercent: fromX,
  }).to(validElements, {
    xPercent: toX,
    stagger: 0.2,
    onComplete: () => {
      if (toX !== 0) {
        gsap.set(validElements, {
          display: "none",
        });
      }
      if (onComplete) onComplete();
    },
  });
};

export const pageInAnimation = () => {
  const { leftBanners, rightBanners } = getBanners();

  animateBanner({ elements: leftBanners, fromX: 0, toX: 100 });
  animateBanner({ elements: rightBanners, fromX: 0, toX: -100 });
};

export const pageOutAnimation = (href: string, router: AppRouterInstance) => {
  const { leftBanners, rightBanners } = getBanners();

  animateBanner({
    elements: leftBanners,
    fromX: -100,
    toX: 0,
    onComplete: () => router.push(href),
  });
  animateBanner({
    elements: rightBanners,
    fromX: 100,
    toX: 0,
    onComplete: () => router.push(href),
  });
};
