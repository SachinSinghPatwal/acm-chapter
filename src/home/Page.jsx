import Hero from "./sections/Hero";
import About from "./sections/About";

const Page = () => {
  return (
    <div className="relative">
      <Hero />
      <About />
      <div className="min-h-40"></div>
    </div>
  );
};

export default Page;

