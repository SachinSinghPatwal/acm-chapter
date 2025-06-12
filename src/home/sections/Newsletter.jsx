import React from "react";
import {
  House,
  ChevronRight,
  ChevronLeft,
  MapPin,
  Mail,
  Phone,
  ArrowRight,
} from "lucide-react";
import { NavLink } from "react-router";
import { div } from "framer-motion/client";

const CallToAction = () => {
  return (
    <div className="min-h-screen text-2xl w-full text-neutral-50 bg-neutral-950">
      <div className="flex flex-col px-max py-24 ">
        <LetsConnect />
        <Newsletter />
      </div>
      <FooterNavigation />
    </div>
  );
};

function LetsConnect() {
  return (
    <div className="">
      <h1 className="font-bebas-neue text-8xl ">
        Let's <span className="text-blue-500">Connect</span>{" "}
      </h1>
      <p className="text-neutral-400 text-lg py-6 max-w-2xl">
        Join XIM's vibrant tech community. Whether you're a student, mentor, or
        industry partner, we'd love to hear from you.
      </p>
      <div className="grid grid-cols-1  py-12 gap-40">
        <div className="flex flex-row gap-4">
          <div className="border p-5 w-full rounded-2xl border-neutral-800 flex gap-2 ">
            <div className="p-4 size-fit bg-neutral-900 rounded-xl">
              <MapPin />
            </div>
            <div className="px-4 flex justify-between flex-col gap-2">
              <h2 className="font-bebas-neue text-3xl tracking-wide">
                Visit Us
              </h2>
              <p className="text-neutral-500 text-sm tracking-wide">
                XIM University
                <br /> Bhubaneswar, Odisha <br /> India - 751002
              </p>
            </div>
          </div>
          <div className="border p-5  w-full rounded-2xl border-neutral-800 flex gap-2 ">
            <div className="p-4 size-fit bg-neutral-900 rounded-xl">
              <Mail />
            </div>
            <div className="px-4 flex justify-between flex-col gap-2">
              <h2 className="font-bebas-neue text-3xl tracking-wide">
                Email Us
              </h2>
              <p className="text-neutral-500 text-sm tracking-wide">
                acm-xim-scse@acm.in <br />
                acmxim@gmail.com
              </p>
            </div>
          </div>
          <div className="border p-5 w-full rounded-2xl border-neutral-800 flex gap-2 ">
            <div className="p-4 size-fit bg-neutral-900 rounded-xl">
              <Phone />
            </div>
            <div className="px-4 flex flex-col justify-between gap-2">
              <h2 className="font-bebas-neue text-3xl tracking-wide">
                Call Us
              </h2>
              <p className="text-neutral-500 text-sm tracking-wide">
                +91 xxxxxxxx <br /> +91 xxxxxxxx <br /> +91 xxxxxxxx{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Newsletter() {
  return (
    <div className="pt-24 pb-4 font-inter">
      <h1 className="font-bebas-neue text-8xl ">
        Join our <span className="text-yellow-400">newsletter</span>
      </h1>
      <p className="text-neutral-400 text-lg py-6 max-w-4xl">
        Hear it from us first. Sign up for real-time updates on upcoming events,
        networking opportunities, and valuable resources designed to fuel your
        academic and professional growth. 
        <br />
        {/* Stay connected, and be part of a our
        thriving community. */}
      </p>
      <div className="py-2">
        <p className="text-neutral-200 text-base">Your email address</p>
        <div className="py-2.5 flex gap-4">
          <input placeholder="harri@gmail.com" type="text" className="rounded-4xl border border-neutral-800 outline-none py-2 px-5 text-base text-neutral-50 bg-neutral-900 w-80" />
          <button className="bg-neutral-300 text-neutral-900 p-2 rounded-full w-fit px-6 hover:bg-yellow-400/95 text-base flex items-center justify-center cursor-pointer">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </div>
  );
}

function FooterNavigation() {
  return (
    <div className="absolute w-full bottom-0 left-0  py-4.5 px-max border-t border-neutral-700 z-[9999]">
      <div className="flex justify-between items-center relative top-1">
        <a href="/" className="opacity-0 flex">
          <ChevronLeft size={18} />
          Team
        </a>
        <a href="/" className="">
          <House size={32} />
        </a>
        <a
          href="events"
          className="font-inter uppercase text-lg flex items-center group cursor-pointer"
        >
          Events{" "}
          <ChevronRight size={19} className="relative group-hover:left-2" />
        </a>
      </div>
    </div>
  );
}

export default CallToAction;
