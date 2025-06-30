import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router";
import {
  InstagramIcon,
  X,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";

const SideNavLinks = [
  { name: "Home", link: "/", img: "bg-red-500" },
  { name: "Events", link: "/events", img: "bg-blue-500" },
  { name: "Team", link: "/team", img: "bg-green-500" },
  { name: "Projects", link: "/projects", img: "bg-stone-500" },
  { name: "Gallery", link: "/gallery", img: "bg-purple-500" },
  { name: "Newsletter", link: "/newsletter", img: "bg-pink-500" },
  { name: "Contact Us", link: "/contact", img: "bg-lime-500" },
  { name: "FAQ", link: "/faq", img: "bg-yellow-500" },
];

const Socials = [
  { icon: <LinkedinIcon />, hoverColor:"hover:text-sky-600" ,  link: "" },
  { icon: <InstagramIcon />, hoverColor:"hover:text-pink-500" ,  link: "" },
  { icon: <TwitterIcon />, hoverColor:"hover:text-blue-600" ,  link: "" },
  { icon: <YoutubeIcon />, hoverColor:"hover:text-red-500" ,  link: "" },
];

function SideNavbar({ isOpen, setIsOpen }) {
  const [navImage, setNavImage] = useState("bg-neutral-300");
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed top-0 w-full h-[calc(100vh)] bg-white backdrop-blur-sm ${
        isOpen ? "left-0" : "left-[220dvw]"
      }  z-50 overflow-hidden flex flex-col justify-between transition-all ease-in-out duration-500 shadow-2xl/30 `}
    >
      <div className=" w-full mx-auto flex flex-col gap-4 h-full items-start justify-between py-1 xl:py-2 3xl:py-4 px-4 sm:px-6">
        <motion.div
          layout
          className={`w-full min-h-[50%] md:min-h-[55%] h-full block ${navImage} rounded-2xl mt-1 md:mt-2 relative`}
        >
          <X
            onClick={() => {
              setIsOpen(!isOpen);
              setNavImage("bg-neutral-300");
            }}
            className=" size-12 md:size-10 lg:size-14 p-2 md:p-2 lg:p-3 bg-white absolute -top-1 right-0 rounded-bl-xl cursor-pointer"
          />
        </motion.div>

        <div className="grid grid-cols-1 h-fit md:grid-cols-2 py-2 sm:gap-x-20 w-[90%] uppercase font-bold relative text-neutral-800/90">
          {SideNavLinks.map((link, index) => (
            <motion.a
              onMouseEnter={() => {
                setNavImage(link.img);
                setHover(true);
              }}
              onMouseLeave={() => setHover(false)}
              initial={{ opacity: 0, blur: "50px" }}
              whileInView={{ opacity: 1, blur: "0px" }}
              transition={{ duration: 0.6, delay: 0.5 + 0.11 * index }}
              key={index}
              href={link.link}
              className={`group flex p-1 xl:p-3 3xl:p-3 4xl:p-4 items-center relative text-3xl md:text-3xl lg:text-4xl xl:text-[2.5rem] 2xl:text-5xl 3xl:text-6xl w-fit ${
                hover
                  ? "md:hover:text-blue-600 md:text-neutral-500 hover:blur-none blur-[0.5px]"
                  : ""
              } transition-all ease-in-out duration-400 cursor-pointer`}
            >
              <span className="">{link.name}</span>
              {/* <span className="absolute left-0 bottom-4 h-1 w-0 group-hover:w-full bg-blue-500/80 transtition ease-in-out duration-300"></span> */}
            </motion.a>
          ))}
        </div>
      </div>

      <div className="absolute hidden  right-0 -bottom-1 lg:flex item-center gap-6 p-4 xl:px-6 rounded-tl-3xl bg-neutral-100">
        {Socials.map((icon, i) => (
          <motion.a
            whileHover={{ y: -4 }}
            key={i}
            className={`${icon.hoverColor} size-12 xl:size-14 rounded-full flex justify-center items-center shadow-md/30 hover:shadow-lg/30 relative ease-in-out cursor-pointer`}
            href={icon.link}
          >
            {icon.icon}
          </motion.a>
        ))}
      </div>
    </div>
  );
}

export default SideNavbar;
