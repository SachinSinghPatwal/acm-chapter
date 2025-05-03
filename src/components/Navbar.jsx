import { useEffect, useState, useRef } from 'react'
import { InstagramIcon, Menu, X, LinkedinIcon, TwitterIcon, YoutubeIcon, ArrowRight } from 'lucide-react'
import { NavLink } from 'react-router'
import { motion, useScroll, useTransform } from 'motion/react'

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
    { name: 'Sponsorship', link: '/sponsorship' },
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

    return (
        <div className='w-full px-6 sm:px-10 py-8 h-24 z-50 flex items-center'>
            <div className='w-full max-w-[80rem] mx-auto flex justify-between gap-12 items-center relative'>
                <a href='/' className='text-6xl font-bold relative -top-2 text-blue-500/90'>
                    ACM
                    <span className='absolute left-3 tracking-wide -bottom-4 text-black/80 text-sm mx-auto w-full' >Student Chapter</span>
                </a>
                <div className=' hidden lg:flex'>
                    {Links.map((link, index) => (
                        <NavLink key={index} to={link.link} className='text-md tracking-wide text-black/70 group transition ease-in-out duration-300 relative w-fit px-5 pb-1 border-b border-r'>
                            {link.name}
                        </NavLink>
                    ))}
                </div>
                <NoticeBoard />
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
        <div className={`fixed top-0 w-screen mt-24 h-[calc(100vh-6rem)] bg-neutral-50 text-neutral-800/90 backdrop-blur-sm ${isOpen ? 'left-0' : 'left-[220dvh]'} flex flex-col items-start justify-center z-50 overflow-hidden px-10 md:px-12 lg:px-20 transition-all ease-in-out duration-1000 shadow-2xl/30`}>
            <div className='grid grid-cols-2 sm:gap-x-20 lg:p-2 w-[90%] gap-8 font-medium overflow-auto relative -top-5'>
                {SideNavLinks.map((link, index) => (
                    <motion.NavLink
                        initial={{ opacity: 0, blur: "50px" }}
                        whileInView={{ opacity: 1, blur: "0px" }}
                        transition={{ duration: 0.6, delay: 0.5 + 0.11 * index }}
                        key={index} to={link.link} className='group relative text-md sm:text-2xl lg:text-7xl border-b border-neutral-400/80 py-1 w-full md:hover:pl-2 transition-all ease-in-out duration-500'>
                        {link.name}
                        <span className='absolute left-0 -bottom-[5px] h-[4.5px] w-0 group-hover:w-full bg-blue-500/80 transtition ease-in-out duration-300'></span>
                    </motion.NavLink>
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
            className='absolute -top-5 right-20 lg:right-28 lg:bottom-1 group cursor-pointer scale-80 lg:scale-100'>
            <div className='w-44 bg-black relative'>
                <motion.div className='flex items-center justify-around p-1 lg:p-2'>
                    <h1 className='text-white text-xs text-center p-1'>Check out our newsletter</h1>
                    <ArrowRight color='white' size={18} className='relative' />
                </motion.div>
            </div>
        </motion.div>
    )
}