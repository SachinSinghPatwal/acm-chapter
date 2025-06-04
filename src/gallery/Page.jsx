import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { ArrowDown } from "lucide-react";

// Card data array
const cardData = [
  {
    src: "https://images.unsplash.com/photo-1635373670332-43ea883bb081?q=80&w=2781&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Example image",
    rotate: "6deg",
    top: "10%",
    left: "25%",
    className: "w-36 md:w-56",
  },
  {
    src: "https://images.unsplash.com/photo-1576174464184-fb78fe882bfd?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Example image",
    rotate: "12deg",
    top: "45%",
    left: "60%",
    className: "w-24 md:w-48",
  },
  {
    src: "https://images.unsplash.com/photo-1503751071777-d2918b21bbd9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Example image",
    rotate: "-6deg",
    top: "20%",
    left: "40%",
    className: "w-52 md:w-80",
  },
  {
    src: "https://images.unsplash.com/photo-1620428268482-cf1851a36764?q=80&w=2609&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Example image",
    rotate: "8deg",
    top: "50%",
    left: "40%",
    className: "w-48 md:w-72",
  },
  {
    src: "https://images.unsplash.com/photo-1602212096437-d0af1ce0553e?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Example image",
    rotate: "18deg",
    top: "20%",
    left: "65%",
    className: "w-40 md:w-64",
  },
  {
    src: "https://images.unsplash.com/photo-1622313762347-3c09fe5f2719?q=80&w=2640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Example image",
    rotate: "-3deg",
    top: "35%",
    left: "55%",
    className: "w-24 md:w-48",
  },
];

const cardData2 = [
  {
    src: "https://images.unsplash.com/photo-1635373670332-43ea883bb081?q=80&w=2781&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Example image",
    description: "A scenic mountain landscape with a clear sky.",
    rotate: "6deg",
    top: "10%",
    left: "25%",
    className: "w-36 md:w-56",
  },
  {
    src: "https://images.unsplash.com/photo-1576174464184-fb78fe882bfd?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Example image",
    description: "A cozy coffee shop interior with warm lighting.",
    rotate: "12deg",
    top: "45%",
    left: "60%",
    className: "w-24 md:w-48",
  },
  {
    src: "https://images.unsplash.com/photo-1503751071777-d2918b21bbd9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Example image",
    description: "A close-up of a blooming flower in a garden.",
    rotate: "-6deg",
    top: "20%",
    left: "40%",
    className: "w-52 md:w-80",
  },
  {
    src: "https://images.unsplash.com/photo-1620428268482-cf1851a36764?q=80&w=2609&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Example image",
    description: "A city skyline at sunset with vibrant colors.",
    rotate: "8deg",
    top: "50%",
    left: "40%",
    className: "w-48 md:w-72",
  },
  {
    src: "https://images.unsplash.com/photo-1602212096437-d0af1ce0553e?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Example image",
    description: "A tranquil beach with turquoise water and white sand.",
    rotate: "18deg",
    top: "20%",
    left: "65%",
    className: "w-40 md:w-64",
  },
  {
    src: "https://images.unsplash.com/photo-1622313762347-3c09fe5f2719?q=80&w=2640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Example image",
    description: "A forest path surrounded by tall green trees.",
    rotate: "-3deg",
    top: "35%",
    left: "55%",
    className: "w-24 md:w-48",
  },
  {
    src: "https://images.unsplash.com/photo-1635373670332-43ea883bb081?q=80&w=2781&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Example image",
    description: "A scenic mountain landscape with a clear sky.",
    rotate: "6deg",
    top: "10%",
    left: "25%",
    className: "w-36 md:w-56",
  },
  {
    src: "https://images.unsplash.com/photo-1576174464184-fb78fe882bfd?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Example image",
    description: "A cozy coffee shop interior with warm lighting.",
    rotate: "12deg",
    top: "45%",
    left: "60%",
    className: "w-24 md:w-48",
  },
  {
    src: "https://images.unsplash.com/photo-1503751071777-d2918b21bbd9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Example image",
    description: "A close-up of a blooming flower in a garden.",
    rotate: "-6deg",
    top: "20%",
    left: "40%",
    className: "w-52 md:w-80",
  },
  {
    src: "https://images.unsplash.com/photo-1620428268482-cf1851a36764?q=80&w=2609&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Example image",
    description: "A city skyline at sunset with vibrant colors.",
    rotate: "8deg",
    top: "50%",
    left: "40%",
    className: "w-48 md:w-72",
  },
  {
    src: "https://images.unsplash.com/photo-1602212096437-d0af1ce0553e?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Example image",
    description: "A tranquil beach with turquoise water and white sand.",
    rotate: "18deg",
    top: "20%",
    left: "65%",
    className: "w-40 md:w-64",
  },
  {
    src: "https://images.unsplash.com/photo-1622313762347-3c09fe5f2719?q=80&w=2640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Example image",
    description: "A forest path surrounded by tall green trees.",
    rotate: "-3deg",
    top: "35%",
    left: "55%",
    className: "w-24 md:w-48",
  },
  {
    src: "https://images.unsplash.com/photo-1635373670332-43ea883bb081?q=80&w=2781&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Example image",
    description: "A scenic mountain landscape with a clear sky.",
    rotate: "6deg",
    top: "10%",
    left: "25%",
    className: "w-36 md:w-56",
  },
  {
    src: "https://images.unsplash.com/photo-1576174464184-fb78fe882bfd?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Example image",
    description: "A cozy coffee shop interior with warm lighting.",
    rotate: "12deg",
    top: "45%",
    left: "60%",
    className: "w-24 md:w-48",
  },
  {
    src: "https://images.unsplash.com/photo-1503751071777-d2918b21bbd9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Example image",
    description: "A close-up of a blooming flower in a garden.",
    rotate: "-6deg",
    top: "20%",
    left: "40%",
    className: "w-52 md:w-80",
  },
  {
    src: "https://images.unsplash.com/photo-1620428268482-cf1851a36764?q=80&w=2609&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Example image",
    description: "A city skyline at sunset with vibrant colors.",
    rotate: "8deg",
    top: "50%",
    left: "40%",
    className: "w-48 md:w-72",
  },
  {
    src: "https://images.unsplash.com/photo-1602212096437-d0af1ce0553e?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Example image",
    description: "A tranquil beach with turquoise water and white sand.",
    rotate: "18deg",
    top: "20%",
    left: "65%",
    className: "w-40 md:w-64",
  },
  {
    src: "https://images.unsplash.com/photo-1622313762347-3c09fe5f2719?q=80&w=2640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Example image",
    description: "A forest path surrounded by tall green trees.",
    rotate: "-3deg",
    top: "35%",
    left: "55%",
    className: "w-24 md:w-48",
  },
];

// Main Gallery component
const Gallery = () => (
  <div className="w-full h-full">
    <DragCards data={cardData} />
    <Columns />
  </div>
);

// Card component
const Card = ({ containerRef, src, alt, top, left, rotate, className }) => {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");
    let maxZIndex = -Infinity;
    els.forEach((el) => {
      let z = parseInt(window.getComputedStyle(el).getPropertyValue("z-index"));
      if (!isNaN(z) && z > maxZIndex) maxZIndex = z;
    });
    setZIndex(maxZIndex + 1);
  };

  return (
    <motion.img
      onMouseDown={updateZIndex}
      style={{ top, left, rotate, zIndex }}
      className={twMerge(
        "drag-elements absolute w-48 bg-white border border-neutral-400 p-1 pb-10",
        className
      )}
      src={src}
      alt={alt}
      drag
      dragConstraints={containerRef}
      dragElastic={0.65}
    />
  );
};

// Cards component
const Cards = ({ data }) => {
  const containerRef = useRef(null);
  return (
    <div className="absolute inset-0 z-10" ref={containerRef}>
      {data.map((card, idx) => (
        <Card key={idx} containerRef={containerRef} {...card} />
      ))}
    </div>
  );
};

// DragCards component
const DragCards = ({ data }) => (
  <section className="relative grid min-h-[calc(100vh-4.5rem)] w-full place-content-center overflow-hidden bg-neutral-50">
    <h2 className="relative z-0 text-[22vw] px-max text-center leading-none font-black text-neutral-200 uppercase md:text-[200px]">
      Our Gallery<span className="text-indigo-500"></span>
    </h2>
    <Cards data={data} />


    <div className="absolute bottom-2 right-8 animate-bounce">
      <ArrowDown size={50} />
    </div>
  </section>
);

// Columns component (responsive masonry grid)
const Columns = () => {
  // Responsive column counts
  const getColumnsCount = () => {
    if (typeof window === "undefined") return 1;
    const width = window.innerWidth;
    if (width < 640) return 2; // mobile
    if (width < 1024) return 3; // sm/md
    if (width < 1280) return 4; // lg
    if (width < 1536) return 5; // xl
    return 6; // 2xl and up
  };

  const [columnsCount, setColumnsCount] = useState(getColumnsCount());

  React.useEffect(() => {
    const handleResize = () => setColumnsCount(getColumnsCount());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Distribute cards into columns
  const columns = Array.from({ length: columnsCount }, () => []);
  cardData2.forEach((card, idx) => {
    columns[idx % columnsCount].push(card);
  });

  return (
    <div className="flex justify-center gap-4 px-max w-full mt-8 ">
      {columns.map((col, colIdx) => (
        <div key={colIdx} className="flex flex-col gap-4">
          {col.map((card, idx) => (
            <div key={idx} className="break-inside-avoid">
              <img
                src={card.src}
                alt={card.alt}
                className={twMerge("rounded-lg shadow-md w-full h-auto", card.className)}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};




export default Gallery;
