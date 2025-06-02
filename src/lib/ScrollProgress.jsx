import { useEffect } from "react";
import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      console.log("Scroll Progress:", v); // value from 0 to 1
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return null; // or your progress bar
}
