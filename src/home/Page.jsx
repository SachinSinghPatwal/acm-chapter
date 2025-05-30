import Hero from "./sections/Hero";
import About from "./sections/About";
import Hightlights from "./sections/Hightlights";
import Events from "./sections/Events";
import Projects from "./sections/Projects";
import MeetTeam from "./sections/MeetTeam";
import Footer from "./sections/Footer";
import CallToAction from "./sections/CallToAction";

import ScrollProgress from "../utils.jsx/ScrollProgress";

const Page = () => { 

  return (
    <div className="relative">
      <Hero />
      <About />
      <Hightlights/>
      <Events/>
      <Projects/>
      <MeetTeam/>
      <CallToAction/>
      <Footer/>
      <ScrollProgress/>
    </div>
  );
};

export default Page;




