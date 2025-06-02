import React from "react";
import arco from "/public/arco.jpg";
import astro from "/public/astro.jpg";
import { motion } from "framer-motion";

export default function UpcomingEvents() {
  return (
    <div className="px-max">
      <UpcomingEventsHeader />
      <motion.div         
      className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 my-4 md:my-10">
        <UpcomingEventCard
          image={arco}
          title="OMG! Arco is here!"
          gradientFrom="from-neutral-800/10"
          gradientTo="to-neutral-800/10"
        />
        <UpcomingEventCard
          image={astro}
          title="Marco Polo Drill with Astro"
          gradientFrom="from-neutral-800/20"
          gradientTo="to-neutral-800/20"
        />
      </motion.div>
    </div>
  );
}
function UpcomingEventsHeader() {
  return (
    <h1 className="font-black w-fit font-bebas-neue text-4xl sm:text-6xl md:text-[5rem]  relative">
      Upcoming events
      <motion.span
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        delay={5}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="absolute left-0 bottom-0 h-1 bg-gradient-to-r from-red-600 to-blue-600 rounded-full"
      />
    </h1>
  );
}

function UpcomingEventCard({ image, title, gradientFrom, gradientTo }) {
  return (
    <motion.div className="grow shrink-0 aspect-video relative cursor-pointer group">
      <div
        className={`absolute inset-0 bg-gradient-to-b group-hover:${gradientFrom} group-hover:${gradientTo} transition-all ease-in-out duration-700`}
      ></div>
      <div
        className="w-full h-full rounded-lg overflow-clip"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="absolute -bottom-10 w-full flex items-center justify-between ">
        <p className="font-inter text-[1.6rem] font-bold text-black">{title}</p>
      </div>
    </motion.div>
  );
}
