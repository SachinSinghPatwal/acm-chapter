import { motion } from "framer-motion";
import Img3 from "/public/img1.jpg";
import { TextAnimate } from "../../components/magicui/TextAnimate";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useState } from "react";

// Data for projects
const projectsData = [
  {
    title: "Web Development",
    bgColor: "bg-sky-200",
    microBg: "bg-blue-100",
    cardTextColor: "text-blue-600",
    projects: [
      {
        name: "Project 1 - This Scenery is Beautiful",
        description:
          "Brief description of the project. Result which has been achieved through this project.",
        stack: ["React", "Node.js", "Express", "MongoDB"],
        image: Img3,
      },
      {
        name: "Project 2 - This Scenery is Beautiful",
        description:
          "Brief description of the project. Result which has been achieved through this project.",
        stack: ["React", "Node.js", "Express", "MongoDB"],
        image: Img3,
      },
      {
        name: "Project 3 - This Scenery is Beautiful",
        description:
          "Brief description of the project. Result which has been achieved through this project.",
        stack: ["React", "Node.js", "Express", "MongoDB"],
        image: Img3,
      },
      {
        name: "Project 4 - This Scenery is Beautiful",
        description:
          "Brief description of the project. Result which has been achieved through this project.",
        stack: ["React", "Node.js", "Express", "MongoDB"],
        image: Img3,
      },
      {
        name: "Project 5 - This Scenery is Beautiful",
        description:
          "Brief description of the project. Result which has been achieved through this project.",
        stack: ["React", "Node.js", "Express", "MongoDB"],
        image: Img3,
      },
    ],
  },
  {
    title: "Data Science",
    bgColor: "bg-orange-200",
    microBg: "bg-orange-100",
    cardTextColor: "text-orange-600",
    projects: [
      {
        name: "Project 1 - This Scenery is Beautiful",
        description:
          "Brief description of the project. Result which has been achieved through this project.",
        stack: ["Python", "Pandas", "NumPy", "Scikit-learn"],
        image: Img3,
      },
      {
        name: "Project 2 - This Scenery is Beautiful",
        description:
          "Brief description of the project. Result which has been achieved through this project.",
        stack: ["Python", "Pandas", "NumPy", "Scikit-learn"],
        image: Img3,
      },
      {
        name: "Project 3 - This Scenery is Beautiful",
        description:
          "Brief description of the project. Result which has been achieved through this project.",
        stack: ["Python", "Pandas", "NumPy", "Scikit-learn"],
        image: Img3,
      },
      // ...add more projects as needed
    ],
  },
  {
    title: "Internet of Things",
    bgColor: "bg-red-200",
    microBg: "bg-red-100",
    cardTextColor: "text-red-600",
    projects: [
      {
        name: "Project 1 - This Scenery is Beautiful",
        description:
          "Brief description of the project. Result which has been achieved through this project.",
        stack: ["Arduino", "C++", "Sensors"],
        image: Img3,
      },
      {
        name: "Project 2 - This Scenery is Beautiful",
        description:
          "Brief description of the project. Result which has been achieved through this project.",
        stack: ["Arduino", "C++", "Sensors"],
        image: Img3,
      },
      {
        name: "Project 3 - This Scenery is Beautiful",
        description:
          "Brief description of the project. Result which has been achieved through this project.",
        stack: ["Arduino", "C++", "Sensors"],
        image: Img3,
      },
      // ...
      // add more projects as needed
    ],
  },
  {
    title: "And more...",
    bgColor: "bg-cyan-200",
    microBg: "bg-cyan-100",
    cardTextColor: "text-cyan-600",
    projects: [
      {
        name: "Project 1 - This Scenery is Beautiful",
        description:
          "Brief description of the project. Result which has been achieved through this project.",
        stack: ["Other Tech"],
        image: Img3,
      },
      {
        name: "Project 2 - This Scenery is Beautiful",
        description:
          "Brief description of the project. Result which has been achieved through this project.",
        stack: ["Other Tech"],
        image: Img3,
      },
      {
        name: "Project 3 - This Scenery is Beautiful",
        description:
          "Brief description of the project. Result which has been achieved through this project.",
        stack: ["Other Tech"],
        image: Img3,
      },
      // ...add more projects as needed
    ],
  },
];

// Main Projects Component
const Projects = () => {
  return (
    <div className="min-h-screen text-2xl w-full hidden md:block">
      <div className="flex relative border-y-[1.5px] border-neutral-900 ">
        <SidePanel />
        <StackPanel projectsData={projectsData} />
      </div>
    </div>
  );
};

export default Projects;

// Side Panel Component
function SidePanel() {
  return (
    <div className="h-[calc(100vh-4.5rem)] sticky top-18 w-1/4  border-r-[2px] border-y-[1px] border-neutral-900 shadow-r-xl">
      <div className="relative rounded-xl ">
        <div className="flex flex-col gap-6 2xl:gap-10 h-[calc(100vh-5.5rem)] mx-2 2xl:my-2 bg-neutral-50 text-neutral-950 py-10 px-6  relative rounded-xl ">
          <h1 className="font-bebas-neue font-black relative text-shadow-xs w-fit z-1 text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
            <TextAnimate animation="blurIn" as="h1" by="character" delay={0.1}>
              Projects
            </TextAnimate>
            <span className="h-4 w-full bg-blue-600/65  absolute bottom-2 -z-1" />
          </h1>

          <p className="text-neutral-800 text-sm xl:text-lg mb-2">
            Explore a diverse collection of projects that blend creativity and
            technology, solving real-world challenges and showcasing innovation
            across domains:
            <ul className="list-none flex flex-col cursor-pointer mt-2 gap-1 w-fit">
              <a className="ml-0 hover:ml-1 group flex ">
                <motion.span
                  whileHover={{ x: 2 }}
                  transition={{
                    type: "spring",
                    duration: 0.1,
                    ease: "easeInOut",
                  }}
                  className=" group-hover:block hidden"
                >
                  {"->"}
                </motion.span>{" "}
                &nbsp;{" "}
                <span className="hover:text-blue-600">🖥️ Web Development</span>
              </a>
              <a className="hover:ml-1  group flex">
                <motion.span
                  whileHover={{ x: 2 }}
                  transition={{
                    type: "spring",
                    duration: 0.1,
                    ease: "easeInOut",
                  }}
                  className=" group-hover:block hidden"
                >
                  {"->"}
                </motion.span>{" "}
                &nbsp;{" "}
                <span className="hover:text-blue-600">📱 App Development</span>
              </a>
              <a className="hover:ml-1 hover:text-blue-600 group flex">
                <motion.span
                  whileHover={{ x: 2 }}
                  transition={{
                    type: "spring",
                    duration: 0.1,
                    ease: "easeInOut",
                  }}
                  className=" group-hover:block hidden"
                >
                  {"->"}
                </motion.span>{" "}
                &nbsp;{" "}
                <span className="hover:text-blue-600">📊 Data Science</span>
              </a>
              <a className="hover:ml-1 group flex">
                <motion.span
                  whileHover={{ x: 2 }}
                  transition={{
                    type: "spring",
                    duration: 0.1,
                    ease: "easeInOut",
                  }}
                  className=" group-hover:block hidden"
                >
                  {"->"}
                </motion.span>{" "}
                &nbsp; <span className="hover:text-blue-600 ">🤖 AI/ML</span>
              </a>
              <a className="hover:ml-1  group flex">
                <motion.span
                  whileHover={{ x: 2 }}
                  transition={{
                    type: "spring",
                    duration: 0.1,
                    ease: "easeInOut",
                  }}
                  className=" group-hover:block hidden"
                >
                  {"->"}
                </motion.span>{" "}
                &nbsp;{" "}
                <span className="hover:text-blue-600">
                  🛰️ Internet of Things
                </span>
              </a>
              <a className="group flex hover:text-neutral-900">
                {" "}
                And more <span className="group-hover:text-blue-600 ">...</span>
              </a>
            </ul>
          </p>

          <button className="group bg-neutral-950 text-neutral-100 text-sm xl:text-lg px-1 pl-5 py-1 rounded-4xl w-fit cursor-pointer flex justify-between gap-6 items-center relative">
            <span className="relative -top-[1px]">Go to projects page</span>
            <span className=" bg-[#6593FA] rounded-full p-1 size-8 overflow-hidden">
              <ArrowUpRight
                className="relative text-black bottom-0 left-0 group-hover:bottom-5 group-hover:left-4.5 transition-all duration-300 ease-in-out"
                size={24}
                strokeWidth="1.5px"
              />
              <ArrowUpRight
                className="relative text-black -bottom-5 -left-10 group-hover:bottom-6 group-hover:left-0 transition-all duration-300 ease-in-out"
                size={24}
                strokeWidth="1.5px"
              />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

// Stack Panel Component
function StackPanel({ projectsData }) {
  return (
    <div className="h-full w-3/4">
      {projectsData.map((section, idx) => (
        <ProjectSection
          key={idx}
          title={section.title}
          bgColor={section.bgColor}
          microBg={section.microBg}
          cardTextColor={section.cardTextColor}
          projects={section.projects}
        />
      ))}
    </div>
  );
}

// Project Section Component
function ProjectSection({ title, bgColor, microBg, cardTextColor, projects }) {
  return (
    <div
      className={`min-h-[calc(100vh-3rem)] flex flex-col gap-8 justify-between relative py-8 xl:py-16  ${bgColor} overflow-hidden border-y-[1px] border-black`}
    >
      <div className="pl-max 2xl:-left-4 relative">
        <h1 className="relative font-bebas-neue font-black text-shadow-xs text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl z-10">
          <TextAnimate animation="blurIn" as="h1" by="character" delay={0.1}>
            {title}
          </TextAnimate>
        </h1>
      </div>

      <div className="absolute bottom-2 lg:bottom-4 xl:bottom-6 2xl:bottom-8 right-16    z-[100] text-neutral-800 text-base font-inter flex items-center gap-1 ">
        Scroll to explore <ArrowRight size={16} strokeWidth="1.5px" />{" "}
      </div>

      <div className="flex gap-5 mb-4 px-8 xl:pl-16  overflow-x-scroll">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            microBg={microBg}
            cardTextColor={cardTextColor}
          />
        ))}
      </div>
    </div>
  );
}

// Project Card Component
function ProjectCard({ index, project, microBg, cardTextColor }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 1, duration: 0.3, ease: "easeInOut" }}
      className="flex flex-col items-center gap-2 h-fit rounded-xl bg-white  overflow-clip relative border-2 group cursor-pointer"
    >
      <div className=" flex flex-col p-1 ">
        <div className="h-full w-[26rem] aspect-video overflow-hidden rounded-lg relative">
          <img
            src={project.image}
            alt=""
            className="object-cover h-full group-hover:rotate-1 scale-100 group-hover:scale-103 rounded-lg z-10 transition-all ease-in-out duration-300"
          />
        </div>
        <div className="my-1.5 mb-2 font-inter px-1.5 flex flex-col gap-0.5 xl:gap-1.5">
          <div className="flex justify-between items-center relative">
            <h2 className="text-xl font-semibold flex justify-start gap-2 items-center">
              <ArrowRight
                strokeWidth="1.7px"
                className={`size-6 -left-8 group-hover:left-0  relative group-hover:block  transition-all duration-300 ease-in-out `}
              />
              <p className="relative -left-8 group-hover:left-0 transition-all duration-300 ease-in-out ">
                {project.name}
              </p>
            </h2>
            <motion.span className=" right-1 group-hover:-right-8 absolute rounded-full text-black/80 transform-all ease-in-out  duration-300">
              <ArrowUpRight
                strokeWidth="1.8px"
                className={`size-6 rotate-0 group-hover:rotate-45 transition-all duration-300 ease-in-out `}
              />
            </motion.span>
          </div>
          <div className="flex max-w-fit gap-2 relative ">
            {project.stack.map((key, i) => (
              <div
                className={`h-fit text-xs rounded group-hover:shadow  ${microBg} ${cardTextColor}  px-1.5  `}
                key={i}
              >
                {key}
              </div>
            ))}
          </div>
          <p
            className={`text-xs font-inter leading-4 max-w-md text-neutral-600 group-hover:text-neutral-700`}
          >
            {project.description}
          </p>
        </div>
      </div>
      <div className="absolute -z-10 md:h-[20rem] lg:h-[23.3rem] aspect-[16/13] w-full rounded-xl rounded-br-[0.85rem] bg-black" />
    </motion.div>
  );
}
