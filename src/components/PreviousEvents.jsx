import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TextAnimate } from "./magicui/TextAnimate";
import { BlurFade } from "./magicui/BlurFade";
import { ArrowUpRight } from "lucide-react";

export default function HorizontalScroll() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["30%", "-330%"]);
  return (
    <div ref={targetRef} className="relative h-[600vh]">
      <div className="sticky flex flex-col justify-between h-[100dvh] top-6 lg:top-10 py-16 overflow-hidden">
        {/* title */}
        <PreviousEventsHeader />
        {/* List of events */}
        <motion.div
          style={{ x }}
          className="flex gap-10 3xl:gap-16 h-full w-[100vw] my-10 lg:my-16"
        >
          {PastEvents.map((event, i) => (
            <BlurFade delay={0.3} key={i} inView>
              <motion.div
                key={i}
                whileHover={{ y: -15 }}
                className={`w-full h-full relative max-h-[25rem] lg:max-h-[26rem] xl:max-h-[40rem] aspect-video rounded-xl cursor-pointer group `}
              >
                <div className={`h-full w-full rounded-2xl relative group-hover:-top-1.5 group-hover:-left-1.5  ${event.image}`} />
                <div className="absolute inset-0 bg-black h-full mx-auto w-full rounded-2xl -z-10 " />
                
                <div className="absolute -bottom-20 w-full flex items-center justify-between ">
                  <p className="font-inter text-2xl lg:text-[1.6rem] font-bold text-black">
                    {event.title}
                    <br />
                    <span className="text-base lg:text-lg relative -top-2 text-neutral-800">
                      {event.date}
                    </span>
                  </p>
                  <motion.p
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: -18 }}
                    className="mr-2  hidden group-hover:flex "
                  >
                    <ArrowUpRight className="size-8 " />
                  </motion.p>
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
      <h1 className="font-black w-fit font-bebas-neue text-5xl text-shadow-xs sm:text-6xl md:text-[5rem] relative">
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
    image: "bg-orange-200",
    title: "The Legend of Zelda",
    date: "30 Feb 2023",
  },
  {
    image: "bg-blue-200",
    title: "Super Mario",
    date: "15 Mar 2023",
  },
  {
    image: "bg-green-200",
    title: "Call of Duty",
    date: "20 Apr 2023",
  },
  {
    image: "bg-purple-200",
    title: "Pokémon",
    date: "10 May 2023",
  },
  {
    image: "bg-slate-200",
    title: "Final Fantasy",
    date: "25 Jun 2023",
  },
  {
    image: "bg-yellow-200",
    title: "Minecraft",
    date: "05 Jul 2023",
  },
  {
    image: "bg-red-200",
    title: "Grand Theft Auto",
    date: "18 Aug 2023",
  },
  {
    image: "bg-indigo-200",
    title: "Counter-Strike",
    date: "01 Nov 2023",
  },
];
