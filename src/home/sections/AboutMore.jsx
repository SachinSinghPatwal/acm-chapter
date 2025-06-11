import React from 'react'

const AboutMore = () => {
  return (
    <div className='py-4 pb-16 px-max flex flex-col gap-20 mx-auto'>
      <div className='flex flex-col gap-8 px-max '>
        <h1 className='text-4xl font-inter font-medium' >Beyond an technical club, ACM is a hub for transversal collaboration, connecting diverse disciplines to bring new concepts to life and make an impact on how we live, design, and build.</h1>
        <p className='text-xl font-inter max-w-4xl'>Our programmes are designed for those who want to break the mould. From radical architecture to self-sufficient design, we cover the subjects that matter, using the tools of tomorrow to build a better today.</p>
      </div>
      <div className='grid grid-cols-3 gap-3 px-max mb-12'>
        <div className='h-[28rem] w-full bg-neutral-200'></div>
        <div className='h-[28rem] w-full bg-neutral-200'></div>
        <div className='h-[28rem] w-full bg-neutral-200'></div>
        <div className='h-[28rem] w-full bg-neutral-200'></div>
        <div className='h-[28rem] w-full bg-neutral-50'></div>
        <div className='h-[28rem] w-full bg-neutral-200'></div>
      </div>
    </div>
  )
}

export default AboutMore