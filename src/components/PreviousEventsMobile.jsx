import React from "react";
import { motion } from "framer-motion";
import { TextAnimate } from "./magicui/TextAnimate";
import img from "/public/img.jpg";
import img1 from "/public/img1.jpg";
import img2 from "/public/img2.jpg";
import img3 from "/public/img3.jpg";
import { BlurFade } from "./magicui/BlurFade";

const previousEvents = [
    {
        image: img,
        title: "OMG! Arco is here!",
        gradientFrom: "from-neutral-800/10",
        gradientTo: "to-neutral-800/10",
    },
    {
        image: img1,
        title: "Marco Polo Park with Astro",
        gradientFrom: "from-neutral-800/20",
        gradientTo: "to-neutral-800/20",
    },
    {
        image: img2,
        title: "The Art of Peace",
        gradientFrom: "from-neutral-800/20",
        gradientTo: "to-neutral-800/20",
    },
    {
        image: img3,
        title: "Exploring the Grand Canyons  ",
        gradientFrom: "from-neutral-800/20",
        gradientTo: "to-neutral-800/20",
    },
];

const PreviousEventsList = ({ events }) => (
    <motion.div className="grid px-max grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 lg:gap-10 my-6 md:my-10">
        {events.map((event, idx) => (
            <BlurFade delay={0.1} inView key={idx}>
                <UpcomingEventCard {...event} />
            </BlurFade>
        ))}
    </motion.div>
);

const PreviousEventsMobile = () => {
    return (
        <div className="h-full">
            <PreviousEventsHeader />
            <PreviousEventsList events={previousEvents} />
            <div className="text-2xl text-center px-max font-bebas-neue mt-12 ">
                And <span className="text-blue-600 underline whitespace-nowrap"> more</span>
            </div>
        </div>
    );
};

export default PreviousEventsMobile;

function PreviousEventsHeader() {
  return (
    <div className="px-max mt-4">
      <h1 className="font-black w-fit font-bebas-neue text-5xl sm:text-6xl md:text-[5rem]  relative">
        <TextAnimate animation="blurIn" as="h1" by="character" delay={0.3}>
          Previous events
        </TextAnimate>
        <motion.span
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          // viewport={{ once: true }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute left-0 bottom-0 h-1 bg-green-500 rounded-full"
        />
      </h1>
    </div>
  );
}

function UpcomingEventCard({ image, title, gradientFrom, gradientTo }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="grow shrink-0 aspect-video relative cursor-pointer group "
    >
      <div
        className={`absolute inset-0 bg-gradient-to-b group-hover:${gradientFrom} group-hover:${gradientTo} transition-all ease-in-out duration-700`}
      ></div>
      <motion.div className="absolute inset-0 bg-black -z-10 rounded-2xl " />
      <motion.div
        whileHover={{ x: -8, y: -4 }}
        className="w-full h-full rounded-xl overflow-clip relative -top-1  "
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></motion.div>
      <div className="absolute my-1 px-1 md:my-2 w-full flex items-center ">
        <p className="font-inter text-xl md:text-[2rem] font-bold text-black relative  group-hover:tracking-wide transition-all duration-500">
          {title}
        </p>
      </div>
    </motion.div>
  );
}
