import { motion } from "framer-motion";
import Img3 from "/public/img2.jpg";

const Projects = () => {
  return (
    <div className="min-h-screen text-2xl w-full">
      <div className="flex relative border-y border-neutral-300 ">
        <SidePanel />
        <StackPanel />
      </div>
    </div>
  );
};

export default Projects;

function SidePanel() {
  return (
    <div className="h-[calc(100vh-5rem)] sticky top-22 w-1/4 py-12 px-4 md:px-8 flex flex-col border-r border-neutral-300">
      <h1 className="font-bebas-neue font-black text-4xl sm:text-6xl md:text-[5rem] ">
        Projects
      </h1>
      <div className="flex flex-col mt-2 gap-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, est.
        </p>
        <button className=" text-blue-700 text-xl cursor-pointer flex gap-2 items-center ">
          View More
        </button>
      </div>
     
    </div>
  );
}

function StackPanel() {
  return (
    <div className="h-full w-3/4">
      <ProjectSection
        title="Web Development"
        bgColor="bg-sky-200"
        cardTextColor="text-neutral-600"
      />
      <ProjectSection
        title="Data Science"
        bgColor="bg-orange-200"
        cardTextColor="text-neutral-600"
      />
      <ProjectSection
        title="Internet of Things"
        bgColor="bg-red-200"
        cardTextColor="text-neutral-600"
      />
      <ProjectSection
        title="And more..."
        bgColor="bg-cyan-200"
        cardTextColor="text-neutral-600"
      />
    </div>
  );
}

function ProjectSection({ title, bgColor, cardTextColor }) {
  return (
    <div
      className={`h-[calc(100vh)] flex flex-col justify-around gap-8 ${bgColor} overflow-hidden`}
    >
      <h1 className="font-bebas-neue pl-max font-black text-4xl sm:text-6xl md:text-[5rem] xl:text-8xl">
        {title}
      </h1>
      <div className="flex gap-5 mb-4 pl-16 overflow-x-scroll">
        {Array.from({ length: 5 }).map((_, index) => (
          <ProjectCard
            key={index}
            index={index}
            cardTextColor={cardTextColor}
          />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ index, cardTextColor }) {
  return (
    <div className="flex items-center justify-between cursor-pointer group">
      <div className="flex flex-col items-center gap-2 rounded-xl bg-white">
        <div className="h-[21rem] aspect-[4/3] flex flex-col p-1 ">
          <img src={Img3} alt="" className="object-cover h-60 rounded-xl " />
          <div className="mt-2 mb-1 flex flex-col gap-0.5">
            <h2 className="text-xl px-2  font-semibold">Project {index + 1}</h2>
            <p
              className={`text-[0.8rem] font-inter px-2 leading-4 max-w-md ${cardTextColor}`}
            >
              Brief description of the project. Result which has been achieved
              through this project.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
