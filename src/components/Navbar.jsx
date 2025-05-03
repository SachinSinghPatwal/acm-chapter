import { useEffect, useState } from 'react'
import { InstagramIcon, Menu, X, LinkedinIcon, TwitterIcon, YoutubeIcon, ArrowDown } from 'lucide-react'
import { NavLink } from 'react-router'

const Links = [
    { name: 'Events', link: '/events' },
    { name: 'Team', link: '/team' },
    { name: 'Gallery', link: '/gallery' },
    { name: 'Notice', link: '/newsletter' },
    { name: 'Contact Us', link: '/contact' },
]

const SideNavLinks = [
    { name: 'Home', link: '/' },
    { name: 'Events', link: '/events' },
    { name: 'Team', link: '/team' },
    { name: 'Gallery', link: '/gallery' },
    { name: 'Notice', link: '/newsletter' },
    { name: 'Contact Us', link: '/contact' },
    { name: 'Blog', link: '/blog' },
    { name: 'Projects', link: '/projects' },
    { name: 'Mentorship', link: '/mentorship' },
    { name: 'Sponsorship', link: '/sponsorship' },
    { name: 'Alumni', link: '/alumni' },
    { name: 'Support Us', link: '/support' },
    { name: 'FAQ', link: '/faq' },
]

const Socials = [
    { icon: <LinkedinIcon />, link: "" },
    { icon: <InstagramIcon />, link: "" },
    { icon: <TwitterIcon />, link: "" },
    { icon: <YoutubeIcon />, link: "" },
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    // useEffect(() => {
    //     alert('Navbar mounted')
    // }, [isOpen])

    return (
        <div className='w-full px-6 sm:px-10 py-8 h-32 z-50 border-b border-neutral-600/30'>
            <div className='w-full max-w-[80rem] mx-auto flex justify-between gap-12 items-center '>
                <a href='/' className='text-6xl font-bold relative -top-2 text-blue-500/90'>
                    ACM
                    <span className='absolute left-3 tracking-wide -bottom-4 text-black/80 text-sm mx-auto w-full' >Student Chapter</span>
                </a>
                <div className='gap-10 font-medium hidden lg:flex'>
                    {Links.map((link, index) => (
                        <NavLink key={index} to={link.link} className='text-[18px] tracking-wide text-black/70  group transition ease-in-out duration-300 relative'>
                            {link.name}
                            <span className=' absolute left-0 -bottom-1.5 h-1 w-0 group-hover:w-full bg-blue-500/80 transtition ease-in-out duration-300'></span>
                        </NavLink>
                    ))}
                </div>
                <button onClick={() => setIsOpen(!isOpen)} className='rounded-full bg-neutral-200/80 cursor-pointer p-3.5 flex items-center justify-center'>
                    <Menu />
                </button>
            </div>
            <SideNavbar isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    )
}

export default Navbar


function SideNavbar({ isOpen, setIsOpen }) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    return (
        <div className={`fixed top-0 left-0 w-screen h-screen pt-16  bg-neutral-100 backdrop-blur-sm ${isOpen ? 'block' : 'hidden'} flex flex-col items-start justify-center z-50 overflow-hidden px-10 md:px-12 lg:px-20`}>
            <button className='absolute top-10 right-10 cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                <X size={40} color='black' className='rotate-90' />
            </button>
            <div className='grid grid-cols-2 sm:gap-x-20 lg:p-2 w-[90%] gap-8 text-black/70 font-medium overflow-auto'>
                {SideNavLinks.map((link, index) => (
                    <NavLink key={index} to={link.link} className='group relative text-md sm:text-2xl lg:text-4xl border-b border-neutral-400 py-1 w-full md:hover:pl-4 transition-all ease-in-out duration-500'>
                        {link.name}
                        <span className='absolute left-0 -bottom-[5px] h-1 w-0 group-hover:w-full bg-blue-500/80 transtition ease-in-out duration-300'></span>
                    </NavLink>
                ))}
            </div>

            {/* <div className='bg-sky-50 animate-bounce  p-3.5 rounded-full absolute bottom-5 right-95 shadow-lg/30  '>
            <ArrowDown />
            </div> */}

            <div className="absolute -bottom-1 right-0 py-6 flex item-center gap-6 px-4 sm:px-10 rounded-tl-3xl bg-neutral-100">
                {/* border border-neutral-400  backdrop-blur-sm shadow-lg/30 */}
                {
                    Socials.map((icon, i) => (
                        <NavLink key={i} className="size-14 rounded-full shadow-md/30 flex justify-center items-center hover:shadow-lg/30 hover:-top-2 relative duration-500 ease-in-out cursor-pointer" to={icon.link}>
                            {icon.icon}
                        </NavLink>
                    ))
                }
            </div>
        </div>
    );
}