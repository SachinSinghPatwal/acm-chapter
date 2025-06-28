import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import events from "../lib/eventsData";
import { ChevronLeft, ChevronRight } from "lucide-react";

const EventPage = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);

  console.log(eventId);

  useEffect(() => {
    const foundEvent = events.find((event) => event.id === eventId);
    if (!foundEvent) {
      navigate("/pagenotfound");
    } else {
      setEvent(foundEvent);
    }
  }, [eventId, navigate]);

  if (!event) return null; // or loading indicator

  return (
    <div className="min-h-screen w-full px-max py-12 relative flex flex-col gap-4">
      {/* <div>EventPage: {eventId}</div> */}
      <h1 className="text-5xl ">{event.title}</h1>
      <p>{event.description}</p>
      <FooterNavigation currentEvent={event.title} />
    </div>
  );
};

function FooterNavigation({currentEvent}) {
  return (
    <div className="absolute w-full bottom-0 left-0 py-5 px-max text-neutral-50 bg-neutral-950 border-t border-neutral-700 z-[9999]">
      <div className="flex justify-between items-center relative top-1 ">
        <a
          href="/notice"
          className="font-inter uppercase text-lg flex items-center group cursor-pointer"
        >
          <ChevronLeft
            size={18}
            className="group-hover:text-neutral-300 relative -left-0.5 group-hover:-left-2 transition-all ease-in-out duration-300"
          />
          <p className=" ">Prev Event</p>
        </a>
        <a
          href="/contact"
          className="font-inter uppercase text-lg flex items-center group cursor-pointer "
        >
          <p className="hover:tracking-widest  hover:text-neutral-300 transition-all ease-in-out duration-200">
            {currentEvent}
          </p>
        </a>
        <a
          href="/"
          className="font-inter uppercase text-lg flex items-center group cursor-pointer"
        >
          <p className="">Next Event</p>
          <ChevronRight
            size={19}
            className="group-hover:text-neutral-300 relative left-0.5 group-hover:left-2 transition-all ease-in-out duration-300"
          />
        </a>
      </div>
    </div>
  );
}

export default EventPage;
