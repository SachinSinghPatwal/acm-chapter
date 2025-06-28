import { motion } from "framer-motion";
const bkgd = "https://i.ibb.co/V95MszS/xim-acm.jpg";

export default function AboutSection() {
  return (
    <div className=" bg-neutral-50 relative flex flex-col gap-8 md:gap-14 py-10 xl:py-20">
      <h1 className="text-5xl md:text-7xl w-fit mx-auto font-bebas-neue font-black text-black/85 text-shadow-xs relative text-center">
        <motion.span
          initial={{ width: 0 }}
          whileInView={{ width: "150%" }}
          transition={{delay:0.1, duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="h-1 bg-red-500 hidden lg:block rounded-full absolute inset-y-0 my-auto left-30 md:left-60"
        />
        <span className="text-orange-500">A</span>BOUT <span className="text-orange-500">U</span>S
        <motion.span
          initial={{ width: 0 }}
          whileInView={{ width: "150%" }}
          transition={{delay:0.1, duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="h-1 bg-red-500 hidden lg:block rounded-full absolute inset-y-0 my-auto right-30 md:right-60"
        />
      </h1>
      <p className="text-[0.8rem] font-medium leading-9 max-w-[85rem] px-max md:text-sm font-inter mx-auto lg:text-lg xl:text-xl 2xl:text-2xl text-center text-black/70">
        
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
        doloremque deleniti iste eaque enim voluptatem, ratione est? Sapiente
        eos, earum beatae, temporibus consequuntur unde ad maxime eius corrupti
        velit soluta <br /> magni dolorum quaerat voluptatibus dolorem mollitia,
        praesentium totam commodi itaque? <br /> Adipisci pariatur magnam nihil quidem
        officia reiciendis eaque sit soluta.
      </p>
      <div className="relative w-full 2xl:mt-6">
        <img
          src={bkgd}
          alt="team-image"
          className="object-cover h-full w-full shadow-xl"
          style={{ backgroundPosition: "bottom" }}
        />
        <div className="absolute inset-0  bg-gradient-to-b from-neutral-50 via-neutral-50/0 to-neutral-50/5 w-full z-200"></div>
      </div>
    </div>
  );
}
