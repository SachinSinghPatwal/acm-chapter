
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  MapPin,
  Users,
  Trophy,
  Clock,
  ArrowLeft,
} from "lucide-react";
import events from "../lib/eventsData";

export default function EventPage() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundEvent = events.find((event) => event.id === eventId);

    if (!foundEvent) {
      navigate("/404");
    } else {
      setEvent(foundEvent);
    }
    setLoading(false);
  }, [eventId, navigate]);

  if (loading) {
    return <LoadingSkeleton />;
  }

  if (!event) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 relative pb-36">

      <div className=" mx-auto">
        {/* Hero Section */}
        <div className="relative mb-12">
          <div className="relative h-[28rem] overflow-hidden shadow-2xl">
            <img
              src={
                event.backgroundImg || "/placeholder.svg?height=400&width=800"
              }
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <span className="inline-block mb-3 px-3 py-1 bg-white/20 text-white border border-white/30 rounded-full text-sm font-medium">
                {event.category || "Event"}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                {event.title}
              </h1>
              <div className="flex items-center gap-4 text-white/90">
                {event.date && (
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{event.date}</span>
                  </div>
                )}
                {event.location && (
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <span>{event.location}</span>
                  </div>
                )}
                {event.participants && (
                  <div className="flex items-center gap-1">
                    <Users size={16} />
                    <span>{event.participants} participants</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Main Content */}

          <div className="lg:col-span-2 space-y-8">
            {/* Event Poster */}
            {/* {event.posterImg && (
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img
                  src={event.posterImg || "/placeholder.svg"}
                  alt={`${event.title} poster`}
                  className="w-full h-auto"
                />
              </div>
            )} */}

            {/* Description */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock size={20} className="text-slate-600" />
                <h2 className="text-2xl font-bold text-slate-900">
                  About This Event
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed text-lg">
                {event.description}
              </p>
            </div>

            {/* Rules & Regulations */}
            {event.rulesAndRegulation?.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Rules & Regulations
                </h2>
                <div className="space-y-3">
                  {event.rulesAndRegulation.map((rule, index) => (
                    <div
                      key={index}
                      className="flex gap-3 p-4 bg-slate-50 rounded-lg"
                    >
                      <div className="flex-shrink-0 w-6 h-6 bg-slate-200 rounded-full flex items-center justify-center text-sm font-medium text-slate-700">
                        {index + 1}
                      </div>
                      <p className="text-slate-700">{rule}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Gallery */}
            {event.gallery?.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Event Gallery
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {event.gallery.map((imgUrl, index) => (
                    <div
                      key={index}
                      className="aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                    >
                      <img
                        src={imgUrl || "/placeholder.svg"}
                        alt={`Event Image ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

            
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Event Details */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Event Details
              </h3>
              <div className="space-y-4">
                {event.date && (
                  <div className="flex items-center gap-3">
                    <Calendar className="text-slate-500" size={18} />
                    <div>
                      <p className="font-medium text-slate-900">Date</p>
                      <p className="text-slate-600">{event.date}</p>
                    </div>
                  </div>
                )}
                {event.time && (
                  <div className="flex items-center gap-3">
                    <Clock className="text-slate-500" size={18} />
                    <div>
                      <p className="font-medium text-slate-900">Time</p>
                      <p className="text-slate-600">{event.time}</p>
                    </div>
                  </div>
                )}
                {event.location && (
                  <div className="flex items-center gap-3">
                    <MapPin className="text-slate-500" size={18} />
                    <div>
                      <p className="font-medium text-slate-900">Location</p>
                      <p className="text-slate-600">{event.location}</p>
                    </div>
                  </div>
                )}
                {event.participants && (
                  <div className="flex items-center gap-3">
                    <Users className="text-slate-500" size={18} />
                    <div>
                      <p className="font-medium text-slate-900">Participants</p>
                      <p className="text-slate-600">{event.participants}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Leaderboard */}
            {event.leaderboard?.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Trophy className="text-yellow-500" size={20} />
                  <h3 className="text-xl font-bold text-slate-900">
                    Leaderboard
                  </h3>
                </div>
                <div className="space-y-3">
                  {event.leaderboard.map((entry, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-slate-50 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                            index === 0
                              ? "bg-yellow-100 text-yellow-800"
                              : index === 1
                              ? "bg-slate-100 text-slate-800"
                              : index === 2
                              ? "bg-orange-100 text-orange-800"
                              : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {index + 1}
                        </div>
                        <span className="font-medium text-slate-900">
                          {entry.name}
                        </span>
                      </div>
                      <span className="px-2 py-1 bg-slate-200 text-slate-700 rounded-md text-sm font-medium">
                        {entry.score} pts
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="space-y-3">
                <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 cursor-pointer">
                  Register Now
                </button>
                <button className="w-full border-2 border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-900 font-semibold py-3 px-6 rounded-lg transition-all duration-300 cursor-pointer">
                  Share Event
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <FooterNavigation currentEvent={event.title} />
    </div>
  );
}

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


function LoadingSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="animate-pulse">
          {/* Hero skeleton */}
          <div className="h-96 bg-slate-200 rounded-2xl mb-12"></div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Content skeletons */}
              <div className="h-64 bg-slate-200 rounded-xl"></div>
              <div className="h-32 bg-slate-200 rounded-xl"></div>
              <div className="h-48 bg-slate-200 rounded-xl"></div>
            </div>
            <div className="space-y-6">
              <div className="h-48 bg-slate-200 rounded-xl"></div>
              <div className="h-32 bg-slate-200 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
