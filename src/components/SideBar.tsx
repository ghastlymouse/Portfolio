"use client";

import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { toggleNavVisible } from "@/redux/navSlice";
import { motion } from "framer-motion";

const Sidebar = () => {
  const isOpened = useAppSelector((state) => state.nav.isNavVisible);
  const dispatch = useAppDispatch();
  console.log(isOpened);
  return (
    <div className="relative flex items-start h-full">
      {isOpened ? (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={() => dispatch(toggleNavVisible(false))}
        ></div>
      ) : (
        <button
          className="fixed top-1/2 left-0 z-20"
          onClick={() => dispatch(toggleNavVisible(true))}
        >
          열기
        </button>
      )}
      <motion.nav
        initial={{ x: "-90%" }}
        animate={{ x: isOpened ? 0 : "-90%" }}
        transition={{ type: "spring", stiffness: 1200, damping: 150 }}
        className="fixed top-0 left-0 h-full w-64 bg-black text-white z-20 pr-4"
      >
        <button
          className=" absolute top-1/2 right-4 z-20"
          onClick={() => {
            dispatch(toggleNavVisible(false));
          }}
        >
          닫기
        </button>
        <span>{"GhastlyMouse's Portfolio"}</span>
        <ul className="h-full flex flex-col items-center justify-center gap-10">
          <li className="cursor-pointer">About me</li>
          <li className="cursor-pointer">Projects</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
      </motion.nav>
    </div>
  );
};

export default Sidebar;
