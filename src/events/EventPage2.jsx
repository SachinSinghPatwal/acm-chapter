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
      {/* <div className="text-xs">EventPage: {eventId}</div> */}
      <img src={event.posterImg} alt={event.title} />
      <img src={event.backgroundImg} alt={event.title} />

      <h1 className="text-4xl font-bold">{event.title}</h1>
      <p>{event.description}</p>
      <br />

      {event.rulesAndRegulation?.length > 0 && (
        <div>
          <h2 className="text-3xl font-bold">Rules & Regulations</h2>
          <ul className="py-4">
            {event.rulesAndRegulation.map((rule, index) => (
              <li className="p-2" key={index}>
                {rule}
              </li>
            ))}
          </ul>
        </div>
      )}

      {event.leaderboard?.length > 0 && (
        <div>
          <h2 className="text-3xl font-bold">Leaderboard</h2>
          <ol>
            {event.leaderboard.map((entry, index) => (
              <li key={index}>
                {entry.name} – {entry.score} pts
              </li>
            ))}
          </ol>
        </div>
      )}

      {/* {event.gallery?.length > 0 && (
        <div>
          <h2>Gallery</h2>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            {event.gallery.map((imgUrl, index) => (
              <img
                key={index}
                src={imgUrl}
                alt={`Event Image ${index + 1}`}
                style={{ width: "200px", height: "auto", borderRadius: "8px" }}
              />
            ))}
          </div>
        </div>
      )} */}

      {/* footer nav */}
      <FooterNavigation currentEvent={event.title} />
    </div>
  );
};

function FooterNavigation({ currentEvent }) {
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
