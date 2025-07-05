import React, { useRef } from "react";
import arco from "/public/arco.jpg";
import mario from "/public/mario.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { TextAnimate } from "./magicui/TextAnimate";
import { BlurFade } from "./magicui/BlurFade";
import { ArrowUpRight } from "lucide-react";

// 1. List of event objects
const events = [
  {
    id: 1,
    image: arco,
    title: "OMG! Arco is here!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum neque esse alias impedit mollitia fugit quaerat nihil aliquam.",
    delay: 0.3,
  },
  {
    id: 2,
    image: mario,
    title: "Marco Polo Mario",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum neque esse alias impedit mollitia fugit quaerat nihil aliquam.",
    delay: 0.45,
  },
];

// 2. Main UpcomingEvents component
export default function UpcomingEvents() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["20%", "-100%"]);
  const y = useTransform(scrollYProgress, [0, 1], ["10%", "0%"]);
  return (
    <div ref={targetRef} className="px-max mt-10 relative overflow-x-clip ">
      <UpcomingEventsHeader />
      <motion.h1
        style={{ x, y }}
        className="absolute font-outline-4 font-bebas-neue -top-32 right-0 text-[14rem] italic text-neutral-50 whitespace-nowrap"
      >
        Upcoming events
      </motion.h1>

      <UpcomingEventList events={events} />
    </div>
  );
}

// 3. Header component
function UpcomingEventsHeader() {
  return (
    <h1 className="font-bold w-fit font-bebas-neue text-shadow-xs text-heading relative z-10">
      <TextAnimate animation="blurIn" as="h1" by="character" delay={0.1}>
        Upcoming events
      </TextAnimate>
      <motion.span
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 1, ease: "easeInOut" }}
        className="absolute left-0 bottom-0 h-1 bg-gradient-to-r from-blue-500 to-blue-500 rounded-full"
      />{" "}
    </h1>
  );
}

// 4. List component
function UpcomingEventList({ events }) {
  return (
    <motion.div className="grid grid-cols-1 lg:grid-cols-2 md:gap-16 lg:gap-8 xl:gap-10 py-8 md:py-10 xl:py-14">
      {events.map((event) => (
        <BlurFade key={event.id} delay={event.delay} inView>
          <UpcomingEventCard
            image={event.image}
            title={event.title}
            description={event.description}
          />
        </BlurFade>
      ))}
    </motion.div>
  );
}

// 5. Card component
function UpcomingEventCard({ image, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="grow shrink-0 aspect-video relative cursor-pointer group "
    >
      <motion.div className="absolute inset-0 bg-neutral-800 -z-10 rounded-lg " />
      <motion.div
        whileHover={{ x: -9, y: -5 }}
        className="w-full h-full rounded-lg shadow-xl overflow-clip relative -top-1  "
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></motion.div>

      <div className="absolute my-1 md:my-3 w-full">
        <div className=" flex items-center justify-between">
          <p className="font-inter text-lg xl:text-2xl 2xl:text-3xl font-bold text-black relative  transition-all duration-500">
            {title}
          </p>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mr-2  hidden group-hover:flex "
          >
            <ArrowUpRight className="size-6 mb-2" />
          </motion.p>
        </div>
        <p className="text-neutral-600 mt-0.5 text-xs xl:text-sm 2xl:text-base hidden group-hover:block">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
