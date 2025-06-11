import React from 'react'
import {House, ChevronRight, ChevronLeft} from 'lucide-react'
import { NavLink } from 'react-router'

const CallToAction = () => {
  return (
    <div className='min-h-screen text-2xl w-full p-10 text-neutral-50 bg-neutral-950'>
      CallToAction
      <div className='absolute w-full bottom-0 left-0  py-4.5 px-max border-t border-neutral-700 z-[9999]'>
        <div className='flex justify-between items-center relative top-1'>
        <a href='/' className='opacity-0 flex'><ChevronLeft size={18}/>Team</a>
        <a href='/' className=''><House size={32}  /></a>
        <a href='events' className='font-inter uppercase text-lg flex items-center group cursor-pointer'>Events <ChevronRight size={19} className='relative group-hover:left-2' /></a>
      </div>
      </div>
    </div>
  )
}

export default CallToAction