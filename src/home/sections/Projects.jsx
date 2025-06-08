import { motion } from "framer-motion";
import Img3 from "/public/img1.jpg";
import { TextAnimate } from "../../components/magicui/TextAnimate";
import { ArrowRight, ArrowUpRight } from "lucide-react";

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
        stack: ["React", "Node.js", "Express", "MongoDB", "Gemini API"],
        image: Img3,
      },
      {
        name: "Project 2 - This Scenery is Beautiful",
        description:
          "Brief description of the project. Result which has been achieved through this project.",
        stack: ["React", "Node.js", "Express", "MongoDB", "Gemini API"],
        image: Img3,
      },
      {
        name: "Project 3 - This Scenery is Beautiful",
        description:
          "Brief description of the project. Result which has been achieved through this project.",
        stack: ["React", "Node.js", "Express", "MongoDB", "Gemini API"],
        image: Img3,
      },
      {
        name: "Project 4 - This Scenery is Beautiful",
        description:
          "Brief description of the project. Result which has been achieved through this project.",
        stack: ["React", "Node.js", "Express", "MongoDB", "Gemini API"],
        image: Img3,
      },
      {
        name: "Project 5 - This Scenery is Beautiful",
        description:
          "Brief description of the project. Result which has been achieved through this project.",
        stack: ["React", "Node.js", "Express", "MongoDB", "Gemini API"],
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
    <div className="h-[calc(100vh-4.5rem)] sticky top-18 w-1/4 py-8 px-6 flex flex-col gap-4 border-r-[2px] border-y-[1px] border-neutral-900 shadow-r-xl">
      <div className="relative -top-1 left-1 rounded-xl ">
        <div className="flex flex-col gap-4 h-[calc(100vh-7.5rem)] bg-neutral-50 py-7 pl-4 pr-5 -top-1.5 -left-1.5 relative rounded-xl ">
          <h1 className="font-bebas-neue font-black relative text-shadow-xs w-fit z-1 text-5xl lg:text-6xl xl:text-8xl">
            <TextAnimate animation="blurIn" as="h1" by="character" delay={0.1}>
              Projects
            </TextAnimate>
            <span className="h-6 w-full bg-blue-500/65  absolute bottom-2.5 -z-1" />
          </h1>

          <div className="flex flex-col bottom-0 gap-4 text-base lg:text-xl xl:text-2xl ">
            <p className="text-neutral-700 font-inter text-base ">
              Clean, minimal designs with powerful functionality. Each project
              represents a commitment to excellence and attention to detail.
            </p>
            <button className=" text-blue-700/80 text-lg  w-fit font-inter cursor-pointer flex gap-2 items-center relative">
              View more
              <ArrowUpRight className="relative" size={18} />
              <span className="w-full h-[1px] absolute bottom-0 bg-blue-700/80" />
            </button>
          </div>
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
      className={`h-[calc(100vh-3rem)] relative py-20 gap-8 ${bgColor} overflow-hidden border-y-[1px] border-black`}
    >
      <div className="px-max relative">
        <h1 className="relative font-bebas-neue font-black text-shadow-xs text-4xl sm:text-6xl md:text-[5rem] xl:text-8xl z-10">
          <TextAnimate animation="blurIn" as="h1" by="character" delay={0.1}>
            {title}
          </TextAnimate>
        </h1>
      </div>

      <div className="absolute right-4 xl:right-10 bottom-2 xl:bottom-8 2xl:bottom-12 text-neutral-800 text-base font-inter flex items-center gap-1 ">
        Scroll to explore <ArrowRight size={16} strokeWidth="1.5px" />{" "}
      </div>

      <div className="flex gap-5 mb-4 px-8 xl:pl-16 h-full overflow-x-scroll">
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
      className="flex items-center justify-between relative"
    >
      <div className="absolute md:h-[20rem] lg:h-[22.3rem] aspect-[4/3] w-full rounded-xl rounded-br-[0.85rem] bg-black" />

      <motion.div className="flex flex-col items-center gap-2 h-fit rounded-xl bg-white  overflow-clip relative border-2 -top-1.5 -left-[4.5px] group cursor-pointer">
        <div className="md:h-[20rem] lg:h-[22.3rem]  aspect-[4/3] flex flex-col p-1 ">
          <div className=" overflow-hidden rounded-lg h-full w-full relative">
            <img
              src={project.image}
              alt=""
              className="object-cover h-full group-hover:rotate-1 scale-102 group-hover:scale-105 rounded-lg z-10 transition-all ease-in-out duration-300"
            />
          </div>
          <div className="my-1.5 mb-2 font-inter px-2 flex flex-col gap-0.5 xl:gap-1.5 ">
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
            <div className="flex max-w-fit gap-2 relative -top-0.5">
              {project.stack.map((key, i) => (
                <div
                  className={`text-xs rounded group-hover:shadow  ${microBg} ${cardTextColor}  px-1.5  `}
                  key={i}
                >
                  {key}
                </div>
              ))}
            </div>
            <p
              className={`text-[0.8rem]  font-inter leading-4 max-w-md text-neutral-600 group-hover:text-neutral-800`}
            >
              {project.description}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
