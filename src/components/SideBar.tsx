"use client";

import TransitionLink from "@/app/_components/TransitionLink";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { toggleNavVisible } from "@/redux/navSlice";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { LiaGripLinesVerticalSolid } from "react-icons/lia";

const Sidebar = () => {
  const isOpened = useAppSelector((state) => state.nav.isNavVisible);
  const dispatch = useAppDispatch();

  // 스크롤 막기
  useEffect(() => {
    if (isOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
    };
  }, [isOpened]);

  return (
    <div className="relative">
      {/* 오버레이 클릭 시 사이드바 닫기 */}
      {isOpened && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => dispatch(toggleNavVisible(false))}
        ></div>
      )}

      {/* 사이드바 애니메이션 */}
      <motion.nav
        initial={{ x: "-88%" }}
        animate={{ x: isOpened ? 0 : "-88%" }}
        transition={{ type: "spring", stiffness: 1200, damping: 150 }}
        className="fixed top-0 left-0 w-64 bg-black text-white z-40 h-full"
      >
        <div className="sticky top-1/2 transform -translate-y-1/2">
          {/* 사이드바 토글 버튼 */}
          <button
            className="absolute top-1/2 right-0 z-30 bg-black text-white rounded-full"
            onClick={() => {
              if (isOpened) {
                dispatch(toggleNavVisible(false));
              } else {
                dispatch(toggleNavVisible(true));
              }
            }}
          >
            <LiaGripLinesVerticalSolid size={40} />
          </button>
          <ul className="flex flex-col items-center justify-center gap-10 mt-10">
            <TransitionLink href="/" label="Home" />
            <TransitionLink href="/about" label="About" />
            <TransitionLink href="/projects" label="Projects" />
            <TransitionLink href="/contact" label="Contact" />
          </ul>
        </div>
      </motion.nav>
    </div>
  );
};

export default Sidebar;
