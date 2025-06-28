import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HighlightGrid from "../../components/HighlightGrid";
import { AuroraText } from "../../components/magicui/AuroraText";

const Hightlights = () => {
  return (
    <div className="min-h-screen text-2xl w-full py-16 px-max overflow-x-clip">
      <HighlightHeader />
      <HighlightGrid />
    </div>
  );
};

export default Hightlights;

function HighlightHeader() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["38%", "-50%"]);
  const y = useTransform(scrollYProgress, [0, 1], ["10%", "0%"]);
  return (
    <div
      className="w-full flex px-max items-center gap-4 relative"
      ref={targetRef}
    >
      <motion.h1
        style={{ x, y }}
        className="absolute font-outline-4 font-bebas-neue -top-32 right-0 text-[14rem] italic text-neutral-50 whitespace-nowrap"
      >
        Our Achievements
      </motion.h1>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.3, ease: "easeInOut" }}
        className="font-black pr-4 w-fit font-bebas-neue text-heading relative whitespace-nowrap text-neutral-900"
      >
        Our <AuroraText>Achievements</AuroraText>
      </motion.h1>
      <div className="h-full w-full flex flex-col gap-2 md:gap-3 items-center justify-center z-10">
        <motion.span
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.3, ease: "easeInOut" }}
          className="h-1 w-full bg-orange-500 rounded-full "
        />
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.3, ease: "easeInOut" }}
          className="h-1 w-full bg-green-500 rounded-full "
        />
      </div>
    </div>
  );
}
