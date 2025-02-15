import {
  firstCircle,
  fourthCircle,
  secondCircle,
  thirdCircle,
} from "@/constants/timelineCircle";
import TimelineCircle from "./TimelineCircle";

const DevTimeline = () => {
  return (
    <section className="flex flex-col items-center gap-10">
      <TimelineCircle {...firstCircle} />
      <TimelineCircle {...secondCircle} />
      <TimelineCircle {...thirdCircle} />
      <TimelineCircle {...fourthCircle} />
    </section>
  );
};

export default DevTimeline;
