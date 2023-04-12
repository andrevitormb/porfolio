import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
import { features } from "process"
import { useTheme } from "next-themes"

const projects = [
  {
    name: "Netflix Clone",
    description:
      "Building a Fullstack Netflix Clone with React, NextJS, TailwindCSS & Prisma ",
    features: ["Environment, Typescript, NextJS Setup", "MongoDB & Prisma connect, Database creation", "Authentication with NextAuth, Google & Github Login" , 
    "Full responsiveness on all pages" , "Cookie based authentication",
     "API and Controllers creation" , "Detail-oriented effects and animations using TailwindCSS","React SWR data fetching", "Zustand state management"],
    image: "/myflix.png",
    github: "https://github.com/andrevitormb/myflix",
    link: "https://myflix-rho.vercel.app/auth",
  },
  
]

const ProjectsSection = () => {
    const { systemTheme, theme, setTheme } = useTheme()
  return (
    <section id="projects" className="px-10 bg-white dark:bg-stone-900 min-[380px]:text-center md:text-left">
      <h1 className="py-10 text-center font-bold text-4xl text-neutral-900  dark:text-neutral-100">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28 text-neutral-900  dark:text-neutral-100">
        {projects.map((project, idx) => {
          return (
            <div key={idx} className="py-10">
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-2 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                   {project.features.map((feature, featureId)=>(
                    <p key={featureId} className="text-lg my-1 ">
                        - {feature}
                    </p>
                   ))}
                    <div className="flex flex-row align-bottom space-x-4 mt-5 min-[380px]:justify-center md:justify-start">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection