"use client";

import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { toggleNavVisible } from "@/redux/navSlice";
import { motion } from "framer-motion";

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

      {/* 사이드바 열기 버튼 */}
      {!isOpened && (
        <button
          className="fixed top-1/2 left-4 z-30 bg-white text-black p-2 rounded-full"
          onClick={() => dispatch(toggleNavVisible(true))}
        >
          열기
        </button>
      )}

      {/* 사이드바 애니메이션 */}
      <motion.nav
        initial={{ x: "-100%" }}
        animate={{ x: isOpened ? 0 : "-100%" }}
        transition={{ type: "spring", stiffness: 1200, damping: 150 }}
        className="fixed top-0 left-0 w-64 bg-black text-white z-40 h-full pr-4"
      >
        {/* 사이드바 닫기 버튼 */}
        <button
          className="absolute top-1/2 right-4 z-30 bg-white text-black p-2 rounded-full"
          onClick={() => dispatch(toggleNavVisible(false))}
        >
          닫기
        </button>
        <span className="block text-center mt-8">
          {"GhastlyMouse's Portfolio"}
        </span>
        <ul className="flex flex-col items-center justify-center gap-10 mt-10">
          <li className="cursor-pointer">About me</li>
          <li className="cursor-pointer">Projects</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
      </motion.nav>
    </div>
  );
};

export default Sidebar;
