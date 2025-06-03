import React from "react";
import UpcomingEvents from "../../components/UpcomingEvents";
import PreviousEvents from "../../components/PreviousEvents";
import PreviousEventsMobile from "../../components/PreviousEventsMobile";

const Events = () => {
  return (
    <div className="min-h-screen w-full ">
      <div className=" h-full mx-auto text-2xl  flex flex-col gap-10">
        <UpcomingEvents />
        <div className="hidden md:block">
          <PreviousEvents />
        </div>
        <div className="block md:hidden">
          <PreviousEventsMobile />
        </div>
      </div>
    </div>
  );
};

export default Events;
