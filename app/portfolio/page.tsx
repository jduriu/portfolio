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
        <div className="mt-[50px] fixed top-0 w-full h-[calc(100%-50px)] grid sm:grid-cols-2 sm:p-10">
          <div className="w-full sm:h-full flex justify-center items-center p-10">
            <GlassPane
            className="flex flex-col justify-center items-start
            sm:h-full w-full rounded-lg backdrop-blur-sm px-10 py-3 gap-5 sm:gap-10"
            paneColor="bg-slate-500/30"
            >
              <div className="text-3xl sm:text-3xl md:text-5xl">
                Here are some of my favorite projects!
              </div>
              <div className="hidden sm:block sm:text-xl md:text-3xl">
                click on one to find out more
              </div>
            </GlassPane>
          </div>
          <div className=" h-full w-full overflow-y-scroll">
            <div className="flex flex-wrap gap-10 justify-center items-center p-10">
              {portfolioData.map((project) => (
                <GlassPane
                key={project.id}
                className="p-3 rounded-xl "
                >
                  <ProjectCard project={project}/>
                </GlassPane>
              ))}
            </div>
          </div>
        </div>

      </div>
    )
  }
}
