import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import events from "../lib/eventsData";

const Page = () => {
  // console.log(events);

  return (
    <div className='min-h-screen text-2xl w-full p-10 relative pb-60'>
      <h1 className="mb-20 text-7xl font-extrabold text-center">Events Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, i) => (
          <div
            key={i}
            className="bg-neutral-800 rounded-xl shadow-lg p-6 flex flex-col justify-between border border-neutral-700 hover:shadow-xl transition-shadow"
          >
            <div>
              <h2 className="text-xl font-bold text-neutral-50 mb-2">{event.title}</h2>
              <p className="text-base text-neutral-300 mb-4">{event.description}</p>
            </div>
            <a
              href={`/events/${event.id}`}
              className="self-start mt-auto text-sm px-4 py-2 rounded-lg text-neutral-50 bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Go to Event
            </a>
          </div>
        ))}
      </div>
      <FooterNavigation />
    </div>
  )
}

function FooterNavigation() {
  return (
    <div className="absolute w-full bottom-0 left-0 py-5 px-max text-neutral-50 bg-neutral-950 border-t border-neutral-700 z-[9999]">
      <div className="flex justify-between items-center relative top-1 ">
        <a href="/" className="font-inter uppercase text-lg flex items-center group cursor-pointer">
          <ChevronLeft size={18} className="group-hover:text-neutral-300 relative -left-0.5 group-hover:-left-2 transition-all ease-in-out duration-300" />
          <p className=" ">Home</p>
        </a>
        <a href="/events" className="font-inter uppercase text-lg flex items-center group cursor-pointer ">
          <p className="hover:tracking-widest hover:text-neutral-300 transition-all ease-in-out duration-200">Events</p>
        </a>
        <a
          href="/team"
          className="font-inter uppercase text-lg flex items-center group cursor-pointer"
        >
          <p className="" >Team</p>
          <ChevronRight size={19} className="group-hover:text-neutral-300 relative left-0.5 group-hover:left-2 transition-all ease-in-out duration-300" />
        </a>
      </div>
    </div>
  );
}

export default Page