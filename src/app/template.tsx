"use client";

import { pageInAnimation } from "@/utils/animations";
import { useEffect } from "react";

const Template = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    pageInAnimation();
  }, []);
  return (
    <div>
      <div
        id="banner-1"
        className="w-screen bg-black z-50 fixed top-0 left-0 h-1/4"
      />
      <div
        id="banner-2"
        className="w-screen bg-black z-50 fixed top-1/4 left-0 h-1/4"
      />
      <div
        id="banner-3"
        className="w-screen bg-black z-50 fixed top-2/4 left-0 h-1/4"
      />
      <div
        id="banner-4"
        className="w-screen bg-black z-50 fixed top-3/4 left-0 h-1/4"
      />
      {children}
    </div>
  );
};

export default Template;
