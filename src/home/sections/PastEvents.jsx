import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HorizontalScroll() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["35%", "-260%"]);
  return (
    <div
      ref={targetRef}
      className="relative h-[450vh]"
    >
      <div className="sticky flex flex-col justify-between h-[100dvh] top-0 py-30 2xl:py-40 overflow-hidden">
        {/* title */}
        <div className="font-bebas-neue px-max text-4xl sm:text-6xl md:text-[5rem] 3xl:text-9xl">Previous Events</div>
        {/* List of events */}
        <motion.div style={{ x }} className="flex gap-10 3xl:gap-16 h-full w-[100vw] my-16 3xl:my-30">
          {Array.from({ length: 7 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-full h-full min-h-80 md:min-h-96 max-h-[50rem] aspect-video shadow rounded-xl bg-neutral-300"
            ></motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
