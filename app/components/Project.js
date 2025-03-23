"use client"
import React from 'react'
import { projectsData } from '@/lib/data'
import Projects from './Projects'
import SectionHeading from './Section-heading'


const Project = () => {
  return (
    <section id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>Projects</SectionHeading>

      <div>
        {projectsData.map((project, index) => <Projects key={index} {...project} />)}
      </div>

      <div className='text-center text-lg sm:text-xl font-semibold mt-28'>Discover additional creations beyond these three on My <a href='https://github.com/srk384' target='blank'><span className='text-green-800 underline'>GitHub!</span></a></div>

    </section>
  )
}

export default Project