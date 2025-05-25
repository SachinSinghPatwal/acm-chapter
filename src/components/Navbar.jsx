import { useEffect, useState, useRef } from "react";
import {
  InstagramIcon,
  Menu,
  X,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
  ArrowRight,
  XCircle,
} from "lucide-react";
import { NavLink } from "react-router";
import { motion, useScroll, useTransform } from "framer-motion";

const Links = [
  { name: "Events", link: "/events" },
  { name: "Team", link: "/team" },
  { name: "Gallery", link: "/gallery" },
  { name: "Notice", link: "/newsletter" },
  { name: "Contact", link: "/contact" },
];

const SideNavLinks = [
  { name: "Home", link: "/", img: "bg-red-500" },
  { name: "Events", link: "/events", img: "bg-blue-500" },
  { name: "Team", link: "/team", img: "bg-green-500" },
  { name: "Gallery", link: "/gallery", img: "bg-purple-500" },
  { name: "Newsletter", link: "/newsletter", img: "bg-pink-500" },
  { name: "Contact Us", link: "/contact", img: "bg-lime-500" },
  { name: "Projects", link: "/projects", img: "bg-stone-500" },
  { name: "FAQ", link: "/faq", img: "bg-yellow-500" },
];

const Socials = [
  { icon: <LinkedinIcon />, link: "" },
  { icon: <InstagramIcon />, link: "" },
  { icon: <TwitterIcon />, link: "" },
  { icon: <YoutubeIcon />, link: "" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full px-6 sm:px-10 py-8 h-24 z-50 flex items-center">
      <div className="w-full max-w-[85rem] mx-auto flex justify-between gap-12 items-center relative">
        <a
          href="/"
          className="text-6xl font-bold relative -top-2 text-blue-500/90"
        >
          ACM
          <span className="absolute left-3 tracking-wide -bottom-4 text-black/80 text-sm mx-auto w-full">
            Student Chapter
          </span>
        </a>
        <div className=" hidden lg:flex">
          {Links.map((link, index) => (
            <NavLink
              key={index}
              to={link.link}
              className="text-md tracking-wide text-black/70 group transition ease-in-out duration-300 relative w-fit px-5 pb-1"
            >
              {link.name}
              <span className="absolute left-0 -bottom-[5px] h-[1.5px] w-0 group-hover:w-full bg-blue-500/80 transtition ease-in-out duration-300"></span>
            </NavLink>
          ))}
        </div>
        <NoticeBoard />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full bg-neutral-200/80 cursor-pointer p-3.5 flex items-center justify-center"
        >
          <Menu />
        </button>
      </div>

      <SideNavbar isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Navbar;

function SideNavbar({ isOpen, setIsOpen }) {
  const [navImage, setNavImage] = useState("bg-neutral-300");

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
      className={`fixed top-0 w-full  h-[calc(100vh)] bg-white text-neutral-800/90 backdrop-blur-sm ${
        isOpen ? "left-0" : "left-[220dvw]"
      }  z-50 overflow-hidden  transition-all ease-in-out duration-500 shadow-2xl/30 `}
    >
      <div className="max-w-[100rem]  w-full mx-auto flex flex-col  h-full items-start justify-around px-4 sm:px-8">
        <motion.div
          layout
          className={`w-full h-[50%] block ${navImage}  rounded-4xl mt-2 relative`}
        >
          <X
            onClick={() => {
              setIsOpen(!isOpen);
              setNavImage("bg-neutral-300");
            }}
            className=" size-12  md:size-18 p-2 md:p-5 bg-white absolute -top-1 right-0 rounded-bl-2xl cursor-pointer"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-x-20 p-2 w-[90%] md:gap-6 font-medium overflow-auto relative ">
          {SideNavLinks.map((link, index) => (
            <motion.NavLink
              onMouseEnter={() => setNavImage(link.img)}
              //   onMouseLeave={() => setNavImage("")}
              initial={{ opacity: 0, blur: "50px" }}
              whileInView={{ opacity: 1, blur: "0px" }}
              transition={{ duration: 0.6, delay: 0.5 + 0.11 * index }}
              key={index}
              to={link.link}
              className="group relative text-xl md:text-2xl lg:text-3xl xl:text-5xl md:border-b border-neutral-400/20 py-1 w-full md:hover:pl-2 transition-all ease-in-out duration-500 cursor-pointer"
            >
              {link.name}
              <span className="absolute left-0 -bottom-[5px] h-[4.5px] w-0 group-hover:w-full bg-blue-500/80 transtition ease-in-out duration-300"></span>
            </motion.NavLink>
          ))}
        </div>
      </div>

      <div className="absolute hidden  right-0 -bottom-1 lg:flex item-center gap-6 p-4 xl:px-6 rounded-tl-3xl bg-neutral-100">
        {Socials.map((icon, i) => (
          <NavLink
            key={i}
            className="size-12 xl:size-14 rounded-full shadow-md/30 flex justify-center items-center hover:shadow-lg/30 hover:-top-2 relative duration-500 ease-in-out cursor-pointer"
            to={icon.link}
          >
            {icon.icon}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

function NoticeBoard() {
  const noticeRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: noticeRef,
  });
  const opacity = useTransform(scrollYProgress, [0.8, 1], ["0%", "100%"]);

  return (
    <motion.div
      initial={{ opacity: 0, blur: "100px", x: 40 }}
      whileInView={{ opacity: 1, blur: "0px", x: 0 }}
      viewport={{ once: false }}
      ref={noticeRef}
      style={{ opacity }}
      className="absolute -top-6 right-20 lg:right-28 lg:bottom-1 group cursor-pointer scale-80 lg:scale-100"
    >
      <div className="w-44 bg-black relative">
        <motion.div className="flex items-center justify-around p-1 lg:p-2">
          <h1 className="text-white text-xs text-center p-1">
            Check out our newsletter
          </h1>
          <ArrowRight color="white" size={18} className="relative top-[1px]" />
        </motion.div>
      </div>
    </motion.div>
  );
}
