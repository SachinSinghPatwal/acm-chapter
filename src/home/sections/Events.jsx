import React from "react";
import PastEvents from "./PastEvents";

const Events = () => {
  return (
    <div className="min-h-screen w-full ">
      <div className=" h-full text-2xl mx-auto flex flex-col">
        {/* Upcoming events */}
        <UpcomingEvents />
        {/* Past events */}
        <PastEvents/>
      </div>
    </div>
  );
};

export default Events;

function UpcomingEvents() {
  return (
    <div className="px-max">
      <h1 className="font-bebas-neue text-4xl sm:text-6xl md:text-[5rem] 3xl:text-9xl">
        Upcoming events
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 my-4 md:my-16 3xl:my-20">
        <div className="grow shrink-0 aspect-video bg-neutral-300 rounded-xl"></div>
        <div className="grow shrink-0 aspect-video bg-neutral-300 rounded-xl"></div>
      </div>
    </div>
  );
}

