import Image from "next/image";
import React from "react";
import { TimelineCircleType } from "../type/timelineCircleType";
import { textLineBreaker } from "@/utils/textUtils";

const TimelineCircle = (timelineInfo: TimelineCircleType) => {
  const { diameter, date, src, alt, description } = timelineInfo;

  return (
    <div
      style={{ width: `${diameter}px`, height: `${diameter}px` }}
      className={`relative rounded-full border-8 border-sky-500 overflow-hidden flex justify-center items-center shadow-custom hover:shadow-hover hover:scale-110 transition-all duration-300 ease-in-out group`}
    >
      <Image
        src={`/assets/devTimeline/${src}`}
        alt={alt}
        fill
        className="object-cover rounded-full transition duration-300 group-hover:brightness-50"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white scale-0 transition-transform duration-300 ease-out group-hover:scale-100">
        <p>{date}</p>
        <p
          className="text-center"
          dangerouslySetInnerHTML={{
            __html: textLineBreaker(description),
          }}
        />
      </div>
    </div>
  );
};

export default TimelineCircle;
