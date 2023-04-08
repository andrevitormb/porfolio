import React from "react"
import Image from "next/image"
import { useTheme } from "next-themes"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
]

const AboutSection = () => {
    const { systemTheme, theme, setTheme } = useTheme()
  return (
    <section id="about" className="px-10 bg-white dark:bg-stone-900 ">
    <div className="my-5 pb-12 md:pt-16 md:pb-48 md:mx-10 ">
      <h1 className="text-center font-bold text-4xl text-neutral-900  dark:text-neutral-100">
        About Me
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className=" min-[380px]:text-center flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left text-neutral-900  dark:text-neutral-100 ">
        <div className="md:w-1/2 ">
          <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
            Get to know me!
          </h1>
          <p className="">
            Hi, my name is Andre and I am a{" "}
            <span className="font-bold">{"highly ambitious"}</span>,
            <span className="font-bold">{" self-motivated"}</span>, and
            <span className="font-bold">{" driven"}</span> software engineer
            based in Lisbon, Portugal.
          </p>
          <br />
          <p>
          I graduated in Network Engineering from Mackenzie Brazil, São Paulo in 2019.

I have a CISCO and Azure certification and also working experience in network engineering.
However, since I discover the software engineering area I never wanted to leave that field, that is the type of work that excite me.
          </p>
          <br />
          <p>
          I have a wide range of hobbies and passions that keep me busy. From reading, playing sports, traveling and learning new skills and knowledge.
I&#39;m always looking for new experiences that can improve my soft and hard skills.
          </p>
          <br />
          <p>
            I believe that you should{" "}
            <span className="font-bold text-teal-500">
              never stop growing
            </span>{" "}
            and that&#39;s what I strive to do.
I have a passion for technology and a desire to always push the limits of what is possible. I&#39;m excited to see where my career takes me and I&#39;m always open to new opportunities. 🙂

          </p>
        </div>
        <div className="text-center md:w-1/2 md:text-left">
          <h1 className="text-2xl font-bold mb-6">My Skills</h1>
          <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
            {skills.map((item, idx) => {
              return (
                <p
                  key={idx}
                  className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                >
                  {item.skill}
                </p>
              )
            })}
          </div>
          <Image
            src={theme === "dark" ? '/hero-dark.png' :'/hero-image-light.png' }
            alt=""
            width={theme === "dark"? 400 : 300}
            height={325}
            className="hidden md:block md:relative md:bottom-4 md:left-40 md:z-0 md:mt-4"
          />
        </div>
      </div>
    </div>
  </section>
  )
}

export default AboutSection