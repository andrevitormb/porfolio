import React from 'react'
import Image from 'next/image'
import { Link } from 'react-scroll'
import {HiArrowDown} from 'react-icons/hi'
import { useTheme } from "next-themes"
const HeroSection = () => {
    const { systemTheme, theme, setTheme } = useTheme()
    return (
    <div id="home" className='bg-white dark:bg-stone-900'>
        <div className='flex flex-col text-center items-center justify-center h-screen sm:py-32 py-16 md:flex-row md:space-x-4 md:text-left md:px-40'>
            <div className='md:w-1/2 md:mt-2'>
                <Image className='rounded-[50%] shadow-2xl' src={theme === "dark" ? '/me-dark-version.png' : '/me.jpg' } alt="" width={300} height={300}/>       
            </div>
            <div className='md:mt-2 md:w-3/4'>
                <h1 className='font-bold text-4xl mt-6 md:text-7xl md:mt-0 text-neutral-900  dark:text-neutral-100'> Hi, I&#39;m Andre</h1>
                <p className='md:text-2xl text-neutral-900  dark:text-neutral-100 text-lg mt-4 mb-8'>
                    I&#39;m a {" "}
                    <span className='font-semibold text-teal-600'>
                        Software Engineer{" "}
                    </span>
                    Based in Lisbon, Portugal, Working towards creating software that
                    makes life easier and more meaningful
                </p>
                <Link
                    to="projects"
                    className="text-neutral-100 cursor-pointer font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700 "
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >
                    Projects
                </Link>
            </div>
        </div>
        <div className="flex flex-row items-center text-center justify-center cursor-pointer relative top-[-50px]">
                <Link
                to="about"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                >
                <HiArrowDown size={35} className="animate-bounce text-neutral-900  dark:text-neutral-100" />
                </Link>
            </div>
    </div>
  )
}

export default HeroSection