import { motion } from "framer-motion";
import Img3 from "/public/img2.jpg";
import { TextAnimate } from "../../components/magicui/TextAnimate";

// Data for projects
const projectsData = [
  {
    title: "Web Development",
    bgColor: "bg-sky-200",
    microBg: "bg-blue-100",
    cardTextColor: "text-blue-600",
    projects: [
      {
        name: "Project 1",
        description:
          "Brief description of the project. Result which has been achieved through this project.",
        stack: ["React", "Node.js", "Express", "MongoDB", "Gemini API"],
        image: Img3,
      },
      {
        name: "Project 2",
        description:
          "Brief description of the project. Result which has been achieved through this project.",
        stack: ["React", "Node.js", "Express", "MongoDB", "Gemini API"],
        image: Img3,
      },
      {
        name: "Project 3",
        description:
          "Brief description of the project. Result which has been achieved through this project.",
        stack: ["React", "Node.js", "Express", "MongoDB", "Gemini API"],
        image: Img3,
      },
      {
        name: "Project 4",
        description:
          "Brief description of the project. Result which has been achieved through this project.",
        stack: ["React", "Node.js", "Express", "MongoDB", "Gemini API"],
        image: Img3,
      },
      {
        name: "Project 5",
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
        name: "Project 1",
        description:
          "Brief description of the project. Result which has been achieved through this project.",
        stack: ["Python", "Pandas", "NumPy", "Scikit-learn"],
        image: Img3,
      },
      {
        name: "Project 2",
        description:
          "Brief description of the project. Result which has been achieved through this project.",
        stack: ["Python", "Pandas", "NumPy", "Scikit-learn"],
        image: Img3,
      },
      {
        name: "Project 3",
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
        name: "Project 1",
        description:
          "Brief description of the project. Result which has been achieved through this project.",
        stack: ["Arduino", "C++", "Sensors"],
        image: Img3,
      },
      {
        name: "Project 2",
        description:
          "Brief description of the project. Result which has been achieved through this project.",
        stack: ["Arduino", "C++", "Sensors"],
        image: Img3,
      },
      {
        name: "Project 3",
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
        name: "Project 1",
        description:
          "Brief description of the project. Result which has been achieved through this project.",
        stack: ["Other Tech"],
        image: Img3,
      },
      {
        name: "Project 2",
        description:
          "Brief description of the project. Result which has been achieved through this project.",
        stack: ["Other Tech"],
        image: Img3,
      },
      {
        name: "Project 3",
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
      <div className="flex relative border-y border-neutral-300 ">
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
    <div className="h-[calc(100vh-5rem)] sticky top-18 w-1/4 py-12 px-4 xl:px-8 flex flex-col border-r border-neutral-300  bg-neutral-50 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      <h1 className="font-bebas-neue font-black text-shadow-xs text-5xl lg:text-6xl xl:text-8xl">
        <TextAnimate animation="blurIn" as="h1" by="character" delay={0.1}>
          Projects
        </TextAnimate>
      </h1>

      <div className="flex flex-col mt-2 gap-4 text-base lg:text-xl xl:text-2xl ">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, est.
        </p>
        <button className=" text-blue-700 text-lg lg:text-xl  cursor-pointer flex gap-2 items-center ">
          View More
        </button>
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
      className={`h-[calc(100vh)] flex flex-col justify-around gap-8 ${bgColor} overflow-hidden`}
    >
      <h1 className="font-bebas-neue pl-max font-black text-shadow-xs text-4xl sm:text-6xl  md:text-[5rem] xl:text-8xl">
        <TextAnimate animation="blurIn" as="h1" by="character" delay={0.1}>
          {title}
        </TextAnimate>
      </h1>
      <div className="flex gap-5 mb-4 pl-8 xl:pl-16 overflow-x-scroll">
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
      transition={{ delay: index * 1 , duration: 0.3, ease: "easeInOut" }}
      className="flex items-center justify-between cursor-pointer group"
    >
      <div className="flex flex-col items-center gap-2 rounded-xl bg-white">
        <div className="h-[22.3rem] aspect-[4/3] flex flex-col p-1 ">
          <img
            src={project.image}
            alt=""
            className="object-cover h-60 rounded-xl "
          />
          <div className="my-1.5 px-2 flex flex-col gap-2">
            <h2 className="text-xl  font-semibold">{project.name}</h2>
            <div className=" flex max-w-fit gap-2 relative ">
              {project.stack.map((key, i) => (
                <div
                  className={`text-xs rounded ${microBg} ${cardTextColor} py-0.5 px-1.5  `}
                  key={i}
                >
                  {key}
                </div>
              ))}
            </div>
            <p
              className={`text-[0.8rem] font-inter leading-4 max-w-md text-neutral-600`}
            >
              {project.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
