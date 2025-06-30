import { div } from "framer-motion/client";
import { ArrowUpRight, Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <div className="">
      <div className="mb-[calc(100vh-4.05rem)]"></div>

      <div className="h-[calc(100vh-4rem)] grid grid-rows-6 w-full fixed bottom-0 bg-neutral-950 text-neutral-400/90 -z-10 px-max ">
        <div className="row-span-5 pt-4 border-y-2 border-neutral-800">
          <FooterComponent />
        </div>
        <div className="row-span-1">
          <FooterComponent2 />
        </div>
      </div>
    </div>
  );
};

export default Footer;

function FooterComponent() {
  return (
    <div className="w-full text-xs lg:text-sm 2xl:text-base grid grid-cols-4 py-10 2xl:py-20 font-inter ">
      {/* LOGO */}
      <div className="h-full w-full col-span-1 text-blue-500 text-6xl font-bebas-neue ">
        ACM <span className="text-neutral-100">XIM </span>{" "}
      </div>

      {/* ABOUT US */}
      <div className="h-full w-full col-span-1 flex flex-col gap-4">
        <div className="uppercase text-neutral-100 font-semibold">About Us</div>
        <NavLink>ACM XIM Student Chapter</NavLink>
        <NavLink>Events and Workshops</NavLink>
        <NavLink>Team</NavLink>
        <NavLink>Roadmap</NavLink>
        <NavLink>Blog and Articles</NavLink>
        <NavLink>Gallery </NavLink>
      </div>

      <div className="h-full w-full col-span-1 flex flex-col gap-4 ">
        <div className="uppercase text-neutral-100 font-semibold">Events</div>
        <div>DSA Drill Saturday</div>
        <div>Superman vs Batman</div>
        <div>Teenage Mutant Ninja Turtles</div>

        <div className="mt-8 uppercase text-neutral-100 font-semibold">
          Workshops
        </div>
        <div className="flex gap-2">
          {" "}
          <ArrowUpRight strokeWidth="1.2px" />
          Machine Learning Rush
        </div>
        <div>Solidity or Solana: A Web3 Dilemma</div>
      </div>

      {/* SOCIALS AND CONNECT */}
      <div className="h-full w-full col-span-1 flex flex-col gap-4 ">
        <div className="uppercase text-neutral-100 font-semibold">
          Developers
        </div>
        <div className="flex gap-2">
          <ArrowUpRight strokeWidth="1.2px" />
          XIM ACM Docs
        </div>
        <div className="flex gap-2">
          <ArrowUpRight strokeWidth="1.2px" />
          API References
        </div>
        <div>Dev Hub</div>
        <div>Upcoming TechFest</div>

        <div className="mt-8 uppercase text-neutral-100 font-semibold">
          Connect
        </div>
        <div>Community</div>
        <div>Code of Conduct</div>
        <div>FAQ</div>
        
      </div>
    </div>
  );
}

function FooterComponent2() {
  return (
    <div className="h-full w-full flex justify-between items-center font-inter text-xs lg:text-sm 2xl:text-base ">
      {/* SOCIALS */}
      <div className="flex gap-5">
        <div>Follow us: </div>
        <div className="text-neutral-100">
          <Instagram size={22} />
        </div>
        <div className="text-neutral-100">
          <Twitter size={22} />
        </div>
        <div className="text-neutral-100">
          <Linkedin size={22} />
        </div>
      </div>

      {/* TERMS N OTHERS */}
      <div className="capitalize flex gap-8">
        <div>Newsletter</div>
        <div>FAQs</div>
        <div>Terms of Service</div>
        <div>Cookie Settings</div>
      </div>

      {/* CREDITS */}
      <div className="capitalize flex gap-16">
        <div>© 2025 ACM </div>
        <div>
          Made with ❤️ by{" "}
          <span className="underline underline-offset-4">Tech team</span>
        </div>
      </div>
    </div>
  );
}
