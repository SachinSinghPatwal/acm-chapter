import Hero from "./sections/Hero";
import About from "./sections/About";
import AboutMore from "./sections/AboutMore";
import Hightlights from "./sections/Hightlights";
import Events from "./sections/Events";
import Projects from "./sections/Projects";
import MeetTeam from "./sections/MeetTeam";
import Footer from "./sections/Footer";
import CallToAction from "./sections/CallToAction";

import ScrollProgress from "../lib/ScrollProgress";

const Page = () => { 

  return (
    <div className="relative">
      <Hero />
      <About />
      <AboutMore />
      <Hightlights/>
      <Events/>
      <Projects/>
      <MeetTeam/>
      <CallToAction/>
      <ScrollProgress/>
    </div>
  );
};

export default Page;




