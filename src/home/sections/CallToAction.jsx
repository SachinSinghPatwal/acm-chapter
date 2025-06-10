import React from 'react'
import {House, ChevronRight} from 'lucide-react'

const CallToAction = () => {
  return (
    <div className='min-h-screen text-2xl w-full p-10 text-neutral-50 bg-neutral-950/97'>
      CallToAction
      <div className='absolute w-full bottom-0 left-0 flex justify-between items-center py-4 px-max border-t border-neutral-700 z-[9999]'>
        <div className='opacity-0'><House /></div>
        <div className=''><House /></div>
        <div className='font-inter uppercase text-lg flex items-center group cursor-pointer'>Team<ChevronRight size={18} className='relative group-hover:left-2' /></div>

      </div>
    </div>
  )
}

export default CallToAction