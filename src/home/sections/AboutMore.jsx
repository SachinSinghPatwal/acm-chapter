import React from "react";

const AboutMore = () => {
  return (
    
    <div className="py-6 pb-16 px-max flex flex-col gap-20 mx-auto max-w-[100rem]">
      <div className="flex flex-col gap-18 px-max ">
        <h1 className="text-[2.1rem] font-inter leading-10 font-medium  text-neutral-800">
          Beyond an technical club, ACM XIM is a hub for transversal collaboration,
          connecting diverse disciplines to bring new concepts to life and make
          an impact on how we live, design, build and grow.
        </h1>
        <p className="text-xl ml-auto text-right py-3 font-inter max-w-3xl text-neutral-600">
          Our programmes are designed for those who want to break the mould.
          From radical architecture to self-sufficient design, we cover the
          subjects that matter, using the tools of tomorrow to build a better
          today.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-3 px-max mb-12">
        <div className="h-[26rem] w-full bg-neutral-200"></div>
        <div className="h-[26rem] w-full bg-neutral-200"></div>
        <div className="h-[26rem] w-full bg-neutral-200"></div>
        <div className="h-[26rem] w-full bg-neutral-200"></div>
        <div className="h-[26rem] w-full bg-neutral-50"></div>
        <div className="h-[26rem] w-full bg-neutral-200"></div>
      </div>
    </div>
  );
};

export default AboutMore;
