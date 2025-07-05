import { useState, useRef } from "react";
import { Menu, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import SideNavbar from "./SideNavbar";

const Links = [
  { name: "Events", link: "/events" },
  { name: "Team", link: "/team" },
  { name: "Gallery", link: "/gallery" },
  { name: "Notice", link: "/notice" },
  { name: "Contact", link: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.9938, 0.994],
    ["100%", "100%", "0%"]
  );

  return (
    <motion.div
      style={{ opacity }}
      className="w-full fixed px-max h-18 flex items-center bg-neutral-50/0 z-[999] "
    >
      <div className="w-full max-w-[90rem] mx-auto flex justify-between gap-12 items-center relative">
        <a
          href="/"
          className="text-3xl xl:text-4xl flex gap-1 font-bold relative text-black-500/90 "
        >
          <h1>ACM</h1>
          <div>
            <span className="text-blue-500">XIM</span>
          </div>
        </a>

        {/* MIDDLE LINKS */}
        <div className=" hidden lg:flex py-4 px-10 bg-white backdrop-blur-lg rounded-4xl relative overflow-clip gap-6 -left-10 top-1">
          {Links.map((link, index) => (
            <Link
              key={index}
              to={link.link}
              layout
              className="group text-sm tracking-wide font-inter text-black/80 group transition ease-in-out duration-300 relative px-3"
            >
              {link.name}
              <motion.span
                layout
                className="absolute left-0 w-0 h-[1px] group-hover:w-full -bottom-4 bg-blue-500/90 transtition ease-in-out duration-300"
              ></motion.span>
            </Link>
          ))}
        </div>
        <NoticeBoard isOpen={isOpen} />

        {/* THE MENU BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full scale-80 md:scale-100 bg-neutral-50 cursor-pointer p-3.5 relative  flex items-center justify-center"
        >
          <Menu />
        </button>
      </div>

      <SideNavbar isOpen={isOpen} setIsOpen={setIsOpen} />
    </motion.div>
  );
};

export default Navbar;

function NoticeBoard({ isOpen }) {
  const noticeRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(
    scrollYProgress,
    [0.038, 0.037, 0],
    ["0%", "100%", "100%"]
  );

  return (
    <motion.div
      initial={{ opacity: 0, blur: "100px", x: 40 }}
      whileInView={{ opacity: 1, blur: "0px", x: 0 }}
      viewport={{ once: false }}
      ref={noticeRef}
      style={{ opacity }}
      className={`fixed top-0 right-48 2xl:right-[19vw] 3xl:right-[8vw] group cursor-pointer scale-80 hidden xl:block lg:scale-100 z-[9] ${
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
