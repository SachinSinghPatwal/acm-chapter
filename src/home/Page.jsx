import Hero from "./sections/Hero";
import About from "./sections/About";
import AboutMore from "./sections/AboutMore";
import Hightlights from "./sections/Hightlights";
import Events from "./sections/Events";
import Projects from "./sections/Projects";
import MeetTeam from "./sections/MeetTeam";
import Newsletter from "./sections/Newsletter";

import ScrollProgress from "../lib/ScrollProgress";
import Gallery from "./sections/Gallery";

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
      <Gallery/>
      <Newsletter/>
      <ScrollProgress/>
    </div>
  );
};

export default Page;




