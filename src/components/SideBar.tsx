"use client";

import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { toggleNavVisible } from "@/redux/navSlice";
import { motion } from "framer-motion";
import Link from "next/link";
import { LiaGripLinesVerticalSolid } from "react-icons/lia";

const Sidebar = () => {
  const isOpened = useAppSelector((state) => state.nav.isNavVisible);
  const dispatch = useAppDispatch();

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
        initial={{ x: "-90%" }}
        animate={{ x: isOpened ? 0 : "-90%" }}
        transition={{ type: "spring", stiffness: 1200, damping: 150 }}
        className="fixed top-0 left-0 w-64 bg-black text-white z-40 h-full pr-4"
      >
        {/* 사이드바 닫기 버튼 */}
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
        <Link href={"/"} className="block text-center mt-8">
          {"GhastlyMouse's Portfolio"}
        </Link>
        <ul className="flex flex-col items-center justify-center gap-10 mt-10">
          <Link href={"/about"}>About me</Link>
          <Link href={"/projects"}>Projects</Link>
          <Link href={"/contact"}>Contact</Link>
        </ul>
      </motion.nav>
    </div>
  );
};

export default Sidebar;
