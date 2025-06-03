import { useEffect, useState, useRef } from "react";
import {
  InstagramIcon,
  Menu,
  X,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router";
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
  { name: "Projects", link: "/projects", img: "bg-stone-500" },
  { name: "Gallery", link: "/gallery", img: "bg-purple-500" },
  { name: "Newsletter", link: "/newsletter", img: "bg-pink-500" },
  { name: "Contact Us", link: "/contact", img: "bg-lime-500" },
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
    <div className="w-full fixed px-4 sm:px-10 py-8 h-18 flex items-center bg-neutral-50/90 backdrop-blur-lg z-[999] shadow">
      <div className="w-full max-w-[85rem] mx-auto flex justify-between gap-12 items-center relative">
        <a
          href="/"
          className="text-3xl xl:text-4xl flex gap-1 font-bold relative  text-black-500/90 "
        >
          <h1>ACM</h1>
          <div>
            <span className="text-blue-500">XIM</span>
          </div>
        </a>
        <div className=" hidden lg:flex relative gap-6 -left-10 top-1">
          {Links.map((link, index) => (
            <Link
              key={index}
              to={link.link}
              className="text-sm tracking-wide font-inter text-black/80 group transition ease-in-out duration-300 relative px-3"
            >
              {link.name}
              <span className="absolute left-0 w-0 h-0.5 group-hover:w-full -bottom-1 bg-blue-500/90 transtition ease-in-out duration-300"></span>
            </Link>
          ))}
        </div>
        <NoticeBoard isOpen={isOpen} />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full scale-80 md:scale-100 bg-neutral-200/80 cursor-pointer p-3.5 relative  flex items-center justify-center"
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
      <div className="max-w-[100rem] w-full mx-auto flex flex-col gap-4 h-full items-start justify-between pt-2 px-4 sm:px-8">
        <motion.div
          layout
          className={`w-full min-h-[50%] md:h-[55%] block ${navImage}  rounded-4xl mt-1 md:mt-2 relative`}
        >
          <X
            onClick={() => {
              setIsOpen(!isOpen);
              setNavImage("bg-neutral-300");
            }}
            className=" size-12 md:size-16 p-2 md:p-4 bg-white absolute -top-1 right-0 rounded-bl-2xl cursor-pointer"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-x-20 p-2 w-[90%] h-full md:gap-6 font-medium relative md:-top-4 ">
          {SideNavLinks.map((link, index) => (
            <motion.NavLink
              onMouseEnter={() => setNavImage(link.img)}
              //   onMouseLeave={() => setNavImage("")}
              initial={{ opacity: 0, blur: "50px" }}
              whileInView={{ opacity: 1, blur: "0px" }}
              transition={{ duration: 0.6, delay: 0.5 + 0.11 * index }}
              key={index}
              to={link.link}
              className="group relative text-3xl md:text-2xl lg:text-3xl xl:text-5xl md:border-b border-neutral-400/20 py-0.5 w-full md:hover:pl-2 transition-all ease-in-out duration-500 cursor-pointer"
            >
              {link.name}
              <span className="absolute left-0 -bottom-[5px] h-[4.5px] w-0 group-hover:w-full bg-blue-500/80 transtition ease-in-out duration-300"></span>
            </motion.NavLink>
          ))}
        </div>
      </div>

      <div className="absolute hidden  right-0 -bottom-1 lg:flex item-center gap-6 p-4 xl:px-6 rounded-tl-3xl bg-neutral-100">
        {Socials.map((icon, i) => (
          <Link
            key={i}
            className="size-12 xl:size-14 rounded-full shadow-md/30 flex justify-center items-center hover:shadow-lg/30 hover:-top-2 relative duration-500 ease-in-out cursor-pointer"
            to={icon.link}
          >
            {icon.icon}
          </Link>
        ))}
      </div>
    </div>
  );
}

function NoticeBoard({ isOpen }) {
  const noticeRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(
    scrollYProgress,
    [0.12, 0.1, 0],
    ["0%", "100%", "100%"]
  );

  return (
    <motion.div
      initial={{ opacity: 0, blur: "100px", x: 40 }}
      whileInView={{ opacity: 1, blur: "0px", x: 0 }}
      viewport={{ once: false }}
      ref={noticeRef}
      style={{ opacity }}
      className={`fixed top-0 right-48  2xl:right-80 group cursor-pointer scale-80 hidden xl:block lg:scale-100 z-[999] ${
        isOpen ? "hidden" : "block"
      } transition-all ease-in-out duration-500`}
    >
      <div className="w-fit bg-black relative">
        <motion.div className="flex items-center justify-around p-1  lg:px-3">
          <h1 className="text-white/95 text-xs text-center p-1 relative ">
            Checkout our newsletter
          </h1>
          <ArrowRight
            color="white"
            size={18}
            className="relative opacity-95 top-[1px]"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
