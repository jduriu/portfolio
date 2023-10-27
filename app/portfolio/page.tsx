'use client'
import { useState } from 'react'
import { portfolioData } from '@/data/portfolioData'
import ProjectCard from '@/components/ProjectCard'
import GlassPane from '@/components/Glass'

export default function PorfolioPage() {
  const [projectIsSelected, setprojectIsSelected] = useState(false)
  const [selectedProject, setSelectedProject] = useState(0)


  // Projects tiled across the top or left
  // Additional project information loads on the right
  // Transition from a full width tile screen to a split view?

  if (projectIsSelected) {
    return (
      <div className="flex mt-[50px]">
        Detail View
      </div>
    )
  } else {
    return (
      <div
      className="bg-pebblebeach bg-center bg-cover bg-scroll
      flex w-full h-full justify-center items-center px-32
      ">
        {/* <GlassPane className="mt-[50px] rounded-sm flex justify-center items-center text-3xl backdrop-blur-sm">
          <div>
            Here are some of the more awesome things I've built!
          </div>
        </GlassPane> */}

        <div className="flex flex-wrap justify-center gap-10 mt-[50px] ">
          {portfolioData.map((project) => (
            <GlassPane key={project.id} className="p-3 z-10 rounded-xl backdrop-blur-[2px] hover:backdrop-blur-[0px]">
              <ProjectCard project={project}/>
            </GlassPane>
          ))}
        </div>
      </div>
    )
  }
}
