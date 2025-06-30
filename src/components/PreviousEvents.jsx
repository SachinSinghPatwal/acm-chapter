import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TextAnimate } from "./magicui/TextAnimate";
import { BlurFade } from "./magicui/BlurFade";
import { ArrowRight, ArrowUpRight, Calendar } from "lucide-react";

export default function HorizontalScroll() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["28%", "-300%"]);

  return (
    <div ref={targetRef} className="relative h-[600vh]">
      <div className="sticky flex flex-col justify-between h-[100dvh] top-8 py-16 2xl:py-20 overflow-hidden ">
        {/* title */}
        <PreviousEventsHeader />
        {/* List of events */}
        <motion.div
          style={{ x }}
          className="relative top-6 flex gap-7 3xl:gap-16 h-full w-[100vw] my-10 lg:my-16 2xl:my-20"
        >
          {PastEvents.map((event, i) => (
            <BlurFade delay={0.1} key={i} inView>
              <motion.div
                key={i}
                whileHover={{ y: -15 }}
                className={`w-full h-full  relative aspect-video  cursor-pointer group `}
              >
                <img
                  src={event.image}
                  className={`h-full w-full rounded-lg relative shadow-xl group-hover:-top-2 group-hover:-left-2  ${event.image}`}
                />
                <div className="absolute inset-0 bg-black h-full mx-auto w-full rounded-lg -z-10 " />
                <p className="absolute hidden group-hover:block -top-6 xl:-top-8 right-3 text-neutral-500 text-xs xl:text-sm">
                  Click to explore
                </p>
                <div className="relative top-3 w-full overflow-x-hidden ">
                  <div className="flex items-center justify-between w-full gap-2">
                    <p className="font-inter flex gap-2 items-center text-lg xl:text-2xl 2xl:text-3xl font-bold text-black">
                      <span className="relative -left-5 hidden group-hover:left-0 group-hover:block ">
                        <ArrowRight />
                      </span>
                      {event.title}
                    </p>
                    <p className="font-inter text-xs xl:text-base 2xl:text-xl relative text-neutral-600/90 pr-1 flex  gap-1">
                      {event.date}
                    </p>
                  </div>
                  <p className=" text-xs lg:text-sm mt-0.5 2xl:text-base text-neutral-600/90 hidden group-hover:block">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            </BlurFade>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function PreviousEventsHeader() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["50%", "-30%"]);
  return (
    <div ref={targetRef} className="px-max">
      <motion.h1
        style={{ x }}
        className="absolute font-outline-4 font-bebas-neue top-0 right-0 text-[14rem] italic text-neutral-50 whitespace-nowrap"
      >
        Previous Events
      </motion.h1>
      <h1 className="font-black w-fit font-bebas-neue mt-1 text-shadow-xs tracking-wide text-heading  relative">
        <TextAnimate animation="blurIn" as="h1" by="character" delay={0.3}>
          Previous events
        </TextAnimate>
        <motion.span
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          // viewport={{ once: true }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute left-0 bottom-0 h-1 bg-blue-500 rounded-full"
        />
      </h1>
      {/* <p className="py-4 xl:py-6 text-sm max-w-2xl font-inter text-neutral-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A ducimus, pariatur doloremque similique tempora quaerat sit corrupti nam delectus temporibus, quae perferendis voluptas, optio voluptatibus nulla.
      </p> */}
    </div>
  );
}

const PastEvents = [
  {
    image: "/public/astro.jpg",
    title: "The Legend of Zelda",
    description:
      "An epic adventure in the world of Hyrule. Join Link as he battles Ganon to save Princess Zelda.",
    date: "30 Feb 2023",
  },
  {
    image: "/public/savage.jpg",
    title: "Super Mario",
    description:
      "An epic adventure in the world of Hyrule. Join Link as he battles Ganon to save Princess Zelda.",

    date: "15 Mar 2023",
  },
  {
    image: "/public/img.jpg",
    title: "Call of Duty",
    description:
      "An epic adventure in the world of Hyrule. Join Link as he battles Ganon to save Princess Zelda.",

    date: "20 Apr 2023",
  },
  {
    image: "/public/img1.jpg",
    title: "Pokémon",
    description:
      "An epic adventure in the world of Hyrule. Join Link as he battles Ganon to save Princess Zelda.",

    date: "10 May 2023",
  },
  {
    image: "/public/img2.jpg",
    title: "Final Fantasy",
    description:
      "An epic adventure in the world of Hyrule. Join Link as he battles Ganon to save Princess Zelda.",

    date: "25 Jun 2023",
  },
  {
    image: "/public/img3.jpg",
    title: "Minecraft",
    description:
      "An epic adventure in the world of Hyrule. Join Link as he battles Ganon to save Princess Zelda.",

    date: "05 Jul 2023",
  },
  {
    image: "/public/arco.jpg",
    title: "Grand Theft Auto",
    description:
      "An epic adventure in the world of Hyrule. Join Link as he battles Ganon to save Princess Zelda.",
    date: "18 Aug 2023",
  },
  {
    image: "/public/astro.jpg",
    title: "Counter-Strike",
    description:
      "An epic adventure in the world of Hyrule. Join Link as he battles Ganon to save Princess Zelda.",
    date: "01 Nov 2023",
  },
];
