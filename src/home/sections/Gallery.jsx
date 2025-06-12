import React from "react";

import img from "/public/img.jpg";
import img1 from "/public/astro.jpg";
import img2 from "/public/img2.jpg";

// Array of gallery rows with image and animation direction
const galleryRows = [
  {
    images: [img],
    animation: "marquee-right 60s linear infinite",
  },
  {
    images: [img1],
    animation: "marquee-left 60s linear infinite",
  },
  {
    images: [img2],
    animation: "marquee-right 70s linear infinite",
  },
];

// MarqueeRow component for each row
const MarqueeRow = ({ images, animation }) => (
  <div className="relative w-full overflow-hidden">
    <div
      className="flex animate-marquee"
      style={{
        width: "max-content",
        animation,
      }}
    >
      {Array.from({ length: 4 }).map((_, idx) =>
        images.map((src, i) => (
          <img
            key={`img-${idx}-${i}`}
            src={src}
            className="h-80 aspect-video object-cover"
            alt=""
          />
        ))
      )}
      {/* Duplicate for seamless loop */}
      {Array.from({ length: 4 }).map((_, idx) =>
        images.map((src, i) => (
          <img
            key={`img-dup-${idx}-${i}`}
            src={src}
            className="h-80 aspect-video object-cover"
            alt=""
          />
        ))
      )}
    </div>
  </div>
);

const Gallery = () => {
  return (
    <div className="h-full w-full pt-12 text-white flex flex-col">
      <div className="w-fit relative px-max pb-14">
        {/* <h1 className="w-fit relative text-heading font-bebas-neue">
          <span className="relative text-neutral-900 z-10">Gallery</span>
          <span className="absolute bottom-0 left-0 h-1 w-full bg-blue-500 rounded-4xl"></span>
        </h1> */}
      </div>

      {galleryRows.map((row, idx) => (
        <MarqueeRow key={idx} images={row.images} animation={row.animation} />
      ))}

      <style>
        {`
          @keyframes marquee-left {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }

          @keyframes marquee-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0%); }
          }
        `}
      </style>
    </div>
  );
};

export default Gallery;
