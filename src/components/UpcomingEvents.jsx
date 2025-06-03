import React from "react";
import arco from "/public/arco.jpg";
import mario from "/public/mario.jpg";
import { motion } from "framer-motion";
import { TextAnimate } from "./magicui/TextAnimate";
import { BlurFade } from "./magicui/BlurFade";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function UpcomingEvents() {
  return (
    <div className="px-max">
      <UpcomingEventsHeader />
      <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 lg:gap-10 my-6 md:my-10">
        <BlurFade delay={0.3} inView>
          <UpcomingEventCard
            image={arco}
            title="OMG! Arco is here!"

          />
        </BlurFade>
        <BlurFade delay={0.45} inView>
          <UpcomingEventCard
            image={mario}
            title="Marco Polo Mario"
          />
        </BlurFade>
      </motion.div>
    </div>
  );
}
function UpcomingEventsHeader() {
  return (
    <h1 className="font-bold w-fit font-bebas-neue text-5xl sm:text-6xl md:text-[5rem] relative">
      <TextAnimate animation="blurIn" as="h1" by="character" delay={0.1}>
        Upcoming events
      </TextAnimate>
      <motion.span
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        // viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 1, ease: "easeInOut" }}
        className="absolute left-0 bottom-0 h-1 bg-gradient-to-r from-red-600 to-blue-600 rounded-full"
      />
    </h1>
  );
}

function UpcomingEventCard({ image, title,}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="grow shrink-0 aspect-video relative cursor-pointer group "
    >
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
      <div className="absolute my-1 px-1 md:my-2 w-full flex items-center justify-between">
        <p className="font-inter text-xl md:text-[2rem] font-bold text-black relative  group-hover:tracking-wide transition-all duration-500">
          {title}
        </p>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mr-2  hidden group-hover:flex "
        >
          <ArrowUpRight className="size-8 mb-2" />
        </motion.p>
      </div>
    </motion.div>
  );
}
