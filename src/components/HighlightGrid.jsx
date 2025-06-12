import React from "react";

const HighlightGrid = () => {
  return (
    <div className="flex flex-col justify-between gap-20 py-10 lg:py-16">
      <div className="h-full w-full grid grid-cols-2 gap-3 ">
        <div className="h-[32rem] px-max">
          <div className="bg-neutral-300 h-full w-full"></div>
        </div>
        <div className="text-neutral-500 h-full text-lg font-inter flex flex-col justify-between ">
          <h2 className="text-6xl text-black">BEST <br/> ACM CHAPTER <br/> OF THE YEAR 2024</h2>
          <div className="">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
              officia voluptatem reprehenderit assumenda consequatur dicta, fuga
              temporibus facere nihil! Consectetur, numquam cum. Dolore ipsum
              nesciunt omnis est vitae atque doloremque voluptatibus nostrum
              tempore veniam esse ipsa, reprehenderit unde sed quod.
            </p>
            <button className="mt-4 underline underline-offset-4 text-blue-600">
              Click here to view more
            </button>
          </div>
        </div>
      </div>
      <div className="h-full w-full grid grid-cols-4 gap-3">
        <div className="bg-neutral-300 h-60 "></div>
        <div className="bg-neutral-300 h-60 "></div>
        <div className="bg-neutral-300 h-60 "></div>
        <div className="bg-neutral-300 h-60 "></div>
      </div>
    </div>
  );
};

export default HighlightGrid;
