'use client'
import { useState } from 'react'
import { portfolioData } from '@/data/portfolioData'
import ProjectCard from '@/components/ProjectCard'

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
      <div className="bg-pebblebeach bg-center bg-cover bg-scroll
      flex w-full h-full justify-center items-center px-32">
        <div className="flex flex-wrap gap-10 mt-[50px]">
          {portfolioData.map((project) => (
            <ProjectCard key={project.id} project={project}/>
          ))}
        </div>
      </div>
    )
  }
}
