import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TextAnimate } from "./magicui/TextAnimate";
import { BlurFade } from "./magicui/BlurFade";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function HorizontalScroll() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["30%", "-330%"]);
  return (
    <div ref={targetRef} className="relative h-[600vh]">
      <div className="sticky flex flex-col justify-between h-[100dvh] top-8 py-16 2xl:py-20 overflow-hidden ">
        {/* title */}
        <PreviousEventsHeader />
        {/* List of events */}
        <motion.div
          style={{ x }}
          className="flex gap-10 3xl:gap-16 h-full w-[100vw] my-10 lg:my-16 2xl:my-22"
        >
          {PastEvents.map((event, i) => (
            <BlurFade delay={0.1} key={i} inView>
              <motion.div
                key={i}
                whileHover={{ y: -15 }}
                className={`w-full h-full 2xl:h-96 relative aspect-video rounded-xl cursor-pointer group `}
              >
                <img
                  src={event.image}
                  className={`h-full w-full rounded-2xl relative border-2 group-hover:-top-1.5 group-hover:-left-1.5  ${event.image}`}
                />
                <div className="absolute inset-0 bg-black h-full mx-auto w-full rounded-2xl rounded-bl-3xl -z-10 " />
                <p className="absolute hidden group-hover:block -top-8 xl:-top-10 right-3 text-neutral-500 text-xs xl:text-lg">
                  Click to explore
                </p>
                <div className="relative top-4 w-full overflow-x-hidden ">
                  <div className="flex items-center justify-between w-full gap-2">
                    <p className="font-inter flex gap-2 items-center text-lg xl:text-2xl font-bold text-black">
                      <span className="relative -left-5 hidden group-hover:left-0 group-hover:block ">
                        <ArrowRight />
                      </span>
                      {event.title}
                    </p>
                    <p className="font-inter text-xs xl:text-base relative text-neutral-500 pr-1">
                      {event.date}
                    </p>
                  </div>
                  <p className="text-xs mt-2 xl:text-sm 2xl:text-base text-neutral-600 hidden group-hover:block">
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
  return (
    <div className="px-max ">
      <h1 className="font-black w-fit font-bebas-neue text-shadow-xs text-heading  relative">
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
    </div>
  );
}

const PastEvents = [
  {
    image: "/public/astro.jpg",
    title: "The Legend of Zelda",
    description: "An epic adventure in the world of Hyrule. Join Link as he battles Ganon to save Princess Zelda.",
    date: "30 Feb 2023",
  },
  {
    image: "/public/savage.jpg",
    title: "Super Mario",
    description: "An epic adventure in the world of Hyrule. Join Link as he battles Ganon to save Princess Zelda.",

    date: "15 Mar 2023",
  },
  {
    image: "/public/img.jpg",
    title: "Call of Duty",
    description: "An epic adventure in the world of Hyrule. Join Link as he battles Ganon to save Princess Zelda.",

    date: "20 Apr 2023",
  },
  {
    image: "/public/img1.jpg",
    title: "Pokémon",
    description: "An epic adventure in the world of Hyrule. Join Link as he battles Ganon to save Princess Zelda.",

    date: "10 May 2023",
  },
  {
    image: "/public/img2.jpg",
    title: "Final Fantasy",
    description: "An epic adventure in the world of Hyrule. Join Link as he battles Ganon to save Princess Zelda.",

    date: "25 Jun 2023",
  },
  {
    image: "/public/img3.jpg",
    title: "Minecraft",
    description: "An epic adventure in the world of Hyrule. Join Link as he battles Ganon to save Princess Zelda.",

    date: "05 Jul 2023",
  },
  {
    image: "/public/arco.jpg",
    title: "Grand Theft Auto",
    description: "An epic adventure in the world of Hyrule. Join Link as he battles Ganon to save Princess Zelda.",
    date: "18 Aug 2023",
  },
  {
    image: "/public/astro.jpg",
    title: "Counter-Strike",
    description: "An epic adventure in the world of Hyrule. Join Link as he battles Ganon to save Princess Zelda.",
    date: "01 Nov 2023",
  },
];
