import { link, title } from "framer-motion/client";
import { ArrowRight, Calendar, Grid, icons, Lightbulb, Microscope, Users } from "lucide-react";
import React from "react";
import { NavLink } from "react-router";

const GridDetails = [
  {
    number: "100+",
    title: "Members",
    link: {
      to: "/team",
      text: "Explore Team",
    },
    icons: "Users"  ,
  },
  {
    number: "50+",
    title: "Events",
    link: {
      to: "/events",
      text: "Explore Events",
    },
    icons: "Calendar" ,
  },
  {
    number: "12+",
    title: "Projects",
    link: {
      to: "/projects",
      text: "Explore Projects",
    },
    icons: "Lightbulb"
  },
  {
    number: "10+",
    title: "Workshops",
    link: {
      to: "/workshops",
      text: "Explore Workshops",
    },
    icons: "Microscope"
  },
];

const HighlightGrid = () => {
  return (
    <div className="flex flex-col justify-between gap-20 py-10 lg:py-16">
      <div className="h-full w-full grid grid-cols-2 gap-3 ">
        <div className="h-[33rem] px-max">
          <div className="bg-neutral-200 rounded-2xl h-full w-full"></div>
        </div>
        <div className="text-neutral-500 h-full text-lg font-inter flex flex-col justify-between ">
          <h2 className="text-6xl font-semibold text-black tracking-tight">
            BEST <br /> <span className="text-blue-500">ACM CHAPTER</span> <br /> OF THE YEAR 2024
          </h2>
          <div className="">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
              officia voluptatem reprehenderit assumenda consequatur dicta, fuga
              temporibus facere nihil! Consectetur, numquam cum. Dolore ipsum
              nesciunt omnis est vitae atque doloremque voluptatibus nostrum
              tempore veniam esse ipsa, reprehenderit unde sed quod.
            </p>
            <button className="mt-4 underline underline-offset-4 text-blue-600">
              Click here to view more
            </button>
          </div>
        </div>
      </div>
      <div className="h-full w-full grid grid-cols-4 gap-4">
        {GridDetails.map((item, index) => (
          <div
            key={index}
            className="bg-neutral-100 h-60 flex flex-col justify-between p-12 relative "
          >
            <h3 className="text-7xl font-bebas-neue text-neutral-800 z-10">
              {item.number}
            </h3>
            <div className="flex flex-row justify-between gap-4 text-neutral-800 z-10">
              <p className="text-2xl font-inter ">
                {item.title}
              </p>
              <NavLink
                to={item.link.to}
                className="text-base font-inter text-neutral-Explore flex items-center gap-1"
              >
                <ArrowRight strokeWidth="1.2px" size={18}/> 
              </NavLink>
            </div>

            {/* <div className="absolute left-2 top-2 text-neutral-200  ">
              {item.icons === "Users" && <Users size={80} />}
              {item.icons === "Calendar" && <Calendar size={80} />}
              {item.icons === "Lightbulb" && <Lightbulb size={80} />}
              {item.icons === "Microscope" && <Microscope size={80} />}
            </div> */}

          </div>
        ))}
      </div>
    </div>
  );
};

export default HighlightGrid;
