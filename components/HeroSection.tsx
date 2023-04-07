import React from 'react'
import Image from 'next/image'
import { Link } from 'react-scroll'
import {HiArrowDown} from 'react-icons/hi'
const HeroSection = () => {
  return (
    <div id="home" className='bg-white dark:bg-stone-900'>
        <div className='flex flex-col text-center items-center justify-center my-10 py-16'>
            <div>
                <Image className='rounded-[30%] shadow-2xl' src="/me.jpg" alt="" width={300} height={300}/>       
            </div>
            <div>
                <h1 className='font-bold text-4xl mt-6  text-neutral-900  dark:text-neutral-100'> Hi, I&#39;m Andre</h1>
                <p className='text-neutral-900  dark:text-neutral-100 text-lg mt-4 mb-8'>
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
            <div className="flex flex-row items-center text-center justify-center  cursor-pointer min-[320px]:mt-0 md:mt-10">
                <Link
                to="about"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                >
                <HiArrowDown size={35} className="animate-bounce mt-10 " />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default HeroSection