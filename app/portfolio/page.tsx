"use client";
import { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolioData";
import ProjectCard from "@/components/ProjectCard";
import GlassPane from "@/components/Glass";
import ProjectDetails from "@/components/ProjectDetails";
import PanAnimation from "@/components/PanAnimation";

export default function PortfolioPage() {
  const [projectIsSelected, setProjectIsSelected] = useState(false);
  const [selectedProjectIdx, setSelectedProjectIdx] = useState(0);
  const [selectedProject, setSelectedProject] = useState({})

  useEffect(() => {
    for (let project of portfolioData) {
      if (project.id === selectedProjectIdx) {
        setSelectedProject(project);
      }
    }
  }, [selectedProjectIdx]);

  return (
    <div className="h-full w-full">
      <div className="bg-pebblebeach bg-center bg-cover fixed top-0 w-full h-full" />
      <div className="mt-[50px] fixed top-0 w-full h-[calc(100%-50px)] p-5
        grid sm:grid-cols-4 grid-rows-4 sm:grid-rows-none overflow-y-scroll"
      >
        <div
          className={`h-full flex flex-wrap justify-center sm:p-10 sm:items-center
            ${projectIsSelected ? "row-span-3 sm:col-span-3 sm:overflow-hidden"
            : "row-span-1 sm:row-span-3 sm:col-span-2"}
          `}
        >
          <GlassPane
            className={`justify-center h-full flex flex-col p-5 w-full rounded-lg backdrop-blur-sm sm:p-10 gap-5 sm:gap-10
              ${projectIsSelected ? "items-start" : "items-center"}
            `}
            paneColor="bg-slate-500/50"
          >
              {projectIsSelected ? (
                <PanAnimation motionVariant='leftToTop' duration={1} trigger={selectedProjectIdx}>
                  <ProjectDetails
                    project={selectedProject}
                    setProjectIsSelected={setProjectIsSelected}
                    />
                </PanAnimation>
              ) : (
                <PanAnimation motionVariant='leftToLeft' duration={1} trigger={projectIsSelected}>
                  <div className="w-full h-full flex flex-col gap-5 justify-center items-center">
                    <div className="text-2xl sm:text-4xl md:text-5xl">
                      Here are some of my favorite projects!
                    </div>
                    <div className="sm:text-xl md:text-3xl">
                      click on one to find out more
                    </div>
                  </div>
                </PanAnimation>
              )}
          </GlassPane>
        </div>
        <div
          className={`overflow-hidden h-full w-full row-span-3
            ${projectIsSelected ? "sm:col-span-1"
            : "sm:col-span-2"}
          `}
          >
          <div
            className={`flex gap-10 sm:p-10 items-center
              ${projectIsSelected ?
              "w-full sm:flex-wrap h-full sm:overflow-y-scroll overflow-x-scroll"
              :
              "flex-wrap overflow-y-scroll h-full justify-center"}
          `}>
            {portfolioData.map((project) => (
              <GlassPane key={project.id} className="p-2 rounded-xl flex flex-col items-center justify-between">
                <ProjectCard
                  project={project}
                  setSelectedId={setSelectedProjectIdx}
                  setProjectSelected={setProjectIsSelected}
                />
                <div className="sm:hidden">
                  {project.title}
                </div>
              </GlassPane>
            ))}
          </div>
        </div>
      </div>
    </div>

  );
}
