import React from "react";
import { motion } from "framer-motion";
import HighlightGrid from "../../components/HighlightGrid";
import { AuroraText } from "../../components/magicui/AuroraText";

const Hightlights = () => {
  return (
    <div className="min-h-screen text-2xl w-full py-10 px-max">
      <HighlightHeader/>
      <HighlightGrid />
    </div>
  );
};

export default Hightlights;


function HighlightHeader(){
  return(
<div className="w-full flex items-center gap-4 ">
    
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{delay:0.1, duration: 0.3, ease: "easeInOut" }}
        className="font-black w-fit font-bebas-neue text-5xl sm:text-6xl md:text-[5rem]  3xl:text-9xl relative whitespace-nowrap">
           Our <AuroraText>Highlights</AuroraText>
        </motion.h1>
        <div

        className="h-full w-full flex flex-col gap-2 md:gap-3 items-center justify-center">
          <motion.span
            initial={{ opacity: 0, y: 0}}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{delay:0.3, duration: 0.3, ease: "easeInOut" }}
          className="h-1 w-full bg-orange-500 rounded-full " />
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{delay:0.5, duration: 0.3, ease: "easeInOut" }}
          className="h-1 w-full bg-green-500 rounded-full " />
        </div>
      </div>

  )
}