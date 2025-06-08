import React from "react";
import { Routes, Route } from "react-router";
import Home from "./home/Page";
import Events from "./events/Page";
import Team from "./team/Page";
import Gallery from "./gallery/Page";
import Newsletter from "./newsletter/Page";
import Navbar from "./components/Navbar";
import Contact from "./contact/Page";
import Footer from "./home/sections/Footer";

const App = () => {
  return (
    <div className="bg-neutral-50">
      <Navbar />
      <div className="h-18" />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/team" element={<Team />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>

      <Footer/>
    </div>
  );
};

export default App;
