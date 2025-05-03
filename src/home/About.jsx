const bkgd = "https://i.ibb.co/V95MszS/xim-acm.jpg"


export default function AboutSection() {
    return (
      <div className='min-h-screen bg-neutral-50 relative flex flex-col gap-20 py-20'>
        <h1 className='text-7xl font-black text-black/80  text-center'>ABOUT US</h1>
        <p className=' text-sm lg:text-lg text-center text-black/70 px-[5dvw]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente doloremque deleniti iste eaque enim voluptatem, ratione est? Sapiente eos, earum beatae, temporibus consequuntur unde ad maxime eius corrupti velit soluta magni dolorum quaerat voluptatibus dolorem mollitia, praesentium totam commodi itaque? Adipisci pariatur magnam nihil quidem officia reiciendis eaque sit soluta.
        </p>
        <div className='relative w-full'>
          <img src={bkgd} alt="team-image" className='object-cover h-full w-full' style={{ backgroundPosition: "bottom" }} />
          <div className='absolute inset-0 bg-gradient-to-b from-neutral-50 via-neutral-50/10 to-neutral-50/10 w-full z-200'>
          </div>
        </div>
      </div>
    )
  }