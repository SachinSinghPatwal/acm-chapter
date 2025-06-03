import React from 'react'
import { motion } from 'framer-motion'
import { TextAnimate } from './magicui/TextAnimate';


const PreviousEventsMobile = () => {
  return (
    <div>
        <PreviousEventsHeader/>
    </div>
  )
}

export default PreviousEventsMobile


function PreviousEventsHeader() {
  return (
    <div className="px-max mt-4">
      <h1 className="font-black w-fit font-bebas-neue text-5xl sm:text-6xl md:text-[5rem]  relative">
        <TextAnimate animation="blurIn" as="h1" by="character" delay={0.3}>
          Previous events
        </TextAnimate>
        <motion.span
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          // viewport={{ once: true }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute left-0 bottom-0 h-1 bg-green-500 rounded-full"
        />
      </h1>
    </div>
  );
}