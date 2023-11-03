"use client";
import { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolioData";
import ProjectCard from "@/components/ProjectCard";
import GlassPane from "@/components/Glass";
import ProjectDetails from "@/components/ProjectDetails";
import PanAnimation from "@/components/PanAnimation";
import { motion, AnimatePresence } from "framer-motion";

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
      <div className="mt-[50px] fixed top-0 w-full h-[calc(100%-50px)] p-5 grid sm:grid-cols-4 grid-rows-4 sm:grid-rows-none overflow-y-scroll">
        <div
          className={`${projectIsSelected ? "sm:col-span-3 sm:row-span-3 h-full" : "sm:col-span-2 row-span-1"}
          sm:overflow-hidden sm:p-10
          sm:h-full flex flex-wrap justify-center sm:items-center`}
        >
          <GlassPane
            className={`${projectIsSelected ? "items-start justify-center h-full" : "items-center justify-center h-full"}
            flex flex-col p-5
            w-full rounded-lg backdrop-blur-sm sm:p-10 gap-5 sm:gap-10`}
            paneColor="bg-slate-500/50"
          >
              {projectIsSelected ? (
                <PanAnimation motionVariant='topToBottom' duration={1} trigger={selectedProjectIdx}>
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
          className={`${projectIsSelected ? "sm:col-span-1" : "sm:col-span-2 row-span-3"}
          overflow-hidden h-full w-full`}
          >
          <div className={`${projectIsSelected ? "w-full" : "h-full flex-col overflow-y-scroll"}
          flex sm:p-10 p-5 gap-10 sm:justify-center sm:items-center
          sm:flex-wrap sm:h-full sm:overflow-y-scroll overflow-x-scroll`}>
            {portfolioData.map((project) => (
              <GlassPane key={project.id} className="p-3 rounded-xl flex items-center gap-5 justify-between">
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
