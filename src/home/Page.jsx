const bkgd = "https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
import About from './About'


const Page = () => {
  return (
    <div className='relative'>
      <div className=' h-[calc(100vh-6rem)] w-full mx-auto relative'>
        <div className='absolute pb-4 pl-5 pr-10 text-6xl font-bold text-neutral-700 bg-neutral-50 rounded-br-[40px] uppercase tracking-tighter'>Association For Computing Machinery</div>
        <img src={bkgd} alt="" className='w-full object-cover'/>
        <div className='absolute bottom-0 right-0 py-6 px-8 text-6xl font-bold text-neutral-700 tracking-tighter bg-neutral-50 rounded-tl-[40px]'>STUDENT CHAPTER</div>
      </div>
      <About />
      <div className='min-h-40'></div>
    </div>
  )
}

export default Page


function AboutSection() {
  return (
    <div className='min-h-screen bg-neutral-50 relative flex flex-col gap-20 py-20'>
      <h1 className='text-7xl font-black text-black/80  text-center'>ABOUT US</h1>
      <p className='text-lg text-center text-black/70 px-[5dvw]'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente doloremque deleniti iste eaque enim voluptatem, ratione est? Sapiente eos, earum beatae, temporibus consequuntur unde ad maxime eius corrupti velit soluta magni dolorum quaerat voluptatibus dolorem mollitia, praesentium totam commodi itaque? Adipisci pariatur magnam nihil quidem officia reiciendis eaque sit soluta.
      </p>
      <div className='relative w-full'>
        <img src={bkgd} alt="team-image" className='object-cover h-full w-full ' style={{ backgroundPosition: "bottom" }} />
        <div className='absolute inset-0 bg-gradient-to-b from-neutral-50 via-neutral-50/10 to-neutral-50/10 w-full z-200'>
        </div>
      </div>
    </div>
  )
}







