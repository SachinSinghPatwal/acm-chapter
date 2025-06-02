import React from "react";
import UpcomingEvents from "../../components/UpcomingEvents";
import PreviousEvents from "../../components/PreviousEvents";

const Events = () => {
  return (
    <div className="min-h-screen w-full ">
      <div className=" h-full mx-auto text-2xl  flex flex-col gap-10">
        <UpcomingEvents />

        <PreviousEvents />
      </div>
    </div>
  );
};

export default Events;
