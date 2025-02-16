"use client";

import { useAppDispatch } from "@/hooks/reduxHooks";
import { toggleNavVisible } from "@/redux/navSlice";
import { pageOutAnimation } from "@/utils/animations";
import { usePathname, useRouter } from "next/navigation";

type LinkInfo = {
  href: string;
  label: string;
};

const TransitionLink = ({ href, label }: LinkInfo) => {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useAppDispatch();

  const handleClick = () => {
    if (pathname !== href) {
      pageOutAnimation(href, router);
    }
    dispatch(toggleNavVisible(false));
  };
  return (
    <button
      onClick={handleClick}
      className="relative transition-all duration-300 ease-out group"
    >
      {label}
      <span className="absolute inset-0 flex items-center justify-center w-full h-full scale-0 bg-white/20 rounded-full transition-transform duration-300 ease-out group-hover:scale-150"></span>
    </button>
  );
};

export default TransitionLink;
