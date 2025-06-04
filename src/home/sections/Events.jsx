import React from "react";
import UpcomingEvents from "../../components/UpcomingEvents";
import UpcomingEventsMobile from "../../components/UpcomingEventsMobile";
import PreviousEvents from "../../components/PreviousEvents";
import PreviousEventsMobile from "../../components/PreviousEventsMobile";

const Events = () => {
  return (
  <div className="min-h-screen ">
      <div className=" h-full mx-auto text-2xl  flex flex-col gap-10">
        
        <div className="hidden md:block">
          <UpcomingEvents />
        </div>
        <div className="block md:hidden">
          <UpcomingEventsMobile />
        </div>
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
