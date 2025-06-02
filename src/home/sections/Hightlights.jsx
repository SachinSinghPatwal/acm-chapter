import React from "react";
import { motion } from "framer-motion";
import HighlightGrid from "../../components/HighlightGrid";

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
        <h1 className="font-black w-fit font-bebas-neue text-4xl sm:text-6xl md:text-[5rem] 3xl:text-9xl relative whitespace-nowrap">
          Our Highlights
        </h1>
        <div className="h-full w-full flex flex-col gap-3 items-center justify-center">
          <span className="h-1 w-full bg-orange-500 rounded-full " />
          <span className="h-1 w-full bg-green-500 rounded-full " />
        </div>
      </div>

  )
}