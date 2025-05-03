import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
const bkgd = "https://i.ibb.co/V95MszS/xim-acm.jpg"

// motion is used in the NoticeBoard component
import { ArrowLeft } from 'lucide-react'

const Page = () => {
  return (
    <div className='relative'>
      <div className='max-w-[80rem] h-[calc(100vh-8rem)] w-full  mx-auto relative'>
        <div className=''>
          <h1 className=' text-2xl text-black/80'>Home Page</h1>
        </div>
        <NoticeBoard />
      </div>

      <AboutSection />
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







function NoticeBoard() {
  const noticeRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: noticeRef,
  })
  const opacity = useTransform(scrollYProgress, [0.8, 1], ["0%", "100%"])

  return (
    <motion.div
      initial={{ opacity: 0, blur: "100px", x: 40 }}
      whileInView={{ opacity: 1, blur: "0px", x: 0 }}
      viewport={{ once: false }}
      ref={noticeRef}
      style={{ opacity }}
      className='absolute scale-80 lg:scale-100 bottom-0 -left-4 lg:-left-20 lg:bottom-1 group cursor-pointer'>
      <div className='w-80 bg-black relative'>
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ type: 'spring', stiffness: 300 }} className='flex items-center justify-between px-5'>
          <ArrowLeft color='white' size={24} className='relative' />
          <h1 className='text-white text-[1.35rem] text-center py-4'>Check out our newsletter</h1>
        </motion.div>
        <span className='absolute left-10 h-6 w-4 bg-black'></span>
        <span className='absolute right-10 h-6 w-4 bg-black'></span>
      </div>
    </motion.div>
  )
}