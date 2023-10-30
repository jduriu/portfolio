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
      <div className="h-full w-full">
        <div className="bg-pebblebeach bg-center bg-cover bg-scroll fixed top-0 w-full h-full"/>
        <div className="mt-[50px] fixed top-0 w-full h-full grid grid-cols-2 p-10">
          <div className="w-full h-full flex justify-center items-center px-10">
            <GlassPane
            className="flex flex-col justify-center items-start
            h-1/2 w-full rounded-lg backdrop-blur-md px-10"
            paneColor="bg-[#000000]/40"
            >
              <div className="text-5xl">
                Portfolio
              </div>
              <div className="text-3xl">
                Here are some of my favorite projects!
              </div>
            </GlassPane>
          </div>
          <div className="flex flex-wrap justify-center gap-10 h-full w-full overflow-scroll">
            {portfolioData.map((project) => (
              <GlassPane
              key={project.id}
              className="p-3 z-10 rounded-xl backdrop-blur-[2px]"
              >
                <ProjectCard project={project}/>
              </GlassPane>
            ))}
          </div>
        </div>

      </div>
    )
  }
}
