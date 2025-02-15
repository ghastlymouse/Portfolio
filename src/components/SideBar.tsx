"use client";

import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { toggleNavVisible } from "@/redux/navSlice";
import { motion } from "framer-motion";
import Link from "next/link";
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
            <Link
              href={"/"}
              onClick={() => dispatch(toggleNavVisible(false))}
              className="relative transition-all duration-300 ease-out group"
            >
              Home
              <span className="absolute inset-0 flex items-center justify-center w-full h-full scale-0 bg-white/20 rounded-full transition-transform duration-300 ease-out group-hover:scale-150"></span>
            </Link>
            <Link
              href={"/about"}
              onClick={() => dispatch(toggleNavVisible(false))}
              className="relative transition-all duration-300 ease-out group"
            >
              About me
              <span className="absolute inset-0 flex items-center justify-center w-full h-full scale-0 bg-white/20 rounded-full transition-transform duration-300 ease-out group-hover:scale-150"></span>
            </Link>
            <Link
              href={"/projects"}
              onClick={() => dispatch(toggleNavVisible(false))}
              className="relative transition-all duration-300 ease-out group"
            >
              Projects
              <span className="absolute inset-0 flex items-center justify-center w-full h-full scale-0 bg-white/20 rounded-full transition-transform duration-300 ease-out group-hover:scale-150"></span>
            </Link>
            <Link
              href={"/contact"}
              onClick={() => dispatch(toggleNavVisible(false))}
              className="relative transition-all duration-300 ease-out group"
            >
              Contact
              <span className="absolute inset-0 flex items-center justify-center w-full h-full scale-0 bg-white/20 rounded-full transition-transform duration-300 ease-out group-hover:scale-150"></span>
            </Link>
          </ul>
        </div>
      </motion.nav>
    </div>
  );
};

export default Sidebar;
