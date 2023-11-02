"use client";
import { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolioData";
import ProjectCard from "@/components/ProjectCard";
import GlassPane from "@/components/Glass";
import ProjectDetails from "@/components/ProjectDetails";

export default function PortfolioPage() {
  const [projectIsSelected, setProjectIsSelected] = useState(false);
  const [selectedProjectIdx, setSelectedProjectIdx] = useState(0);
  const [selectedProject, setSelectedProject] = useState({});

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
      <div className="mt-[50px] fixed top-0 w-full h-[calc(100%-50px)] p-5 grid sm:grid-cols-4">
        <div
          className={`${projectIsSelected ? "col-span-3" : "col-span-2"}
        overflow-hidden p-10
        sm:max-h-full flex justify-center items-center`}
        >
          <GlassPane
            className="flex flex-col justify-center items-start
          sm:h-full w-full rounded-lg backdrop-blur-sm p-10 gap-5 sm:gap-10"
            paneColor="bg-slate-500/30"
          >
            {projectIsSelected ? (
              <ProjectDetails
                project={selectedProject}
                setProjectIsSelected={setProjectIsSelected}
              />
            ) : (
              <>
                <div className="text-4xl md:text-5xl">
                  Here are some of my favorite projects!
                </div>
                <div className="hidden sm:block sm:text-xl md:text-3xl">
                  click on one to find out more
                </div>
              </>
            )}
          </GlassPane>
        </div>
        <div
          className={`${projectIsSelected ? "col-span-1" : "col-span-2"}
        transition duration-500
        overflow-hidden h-full`}
        >
          <div className="flex flex-wrap h-full py-10 gap-10 justify-center items-center overflow-y-scroll">
            {portfolioData.map((project) => (
              <GlassPane key={project.id} className="p-3 rounded-xl ">
                <ProjectCard
                  project={project}
                  setSelectedId={setSelectedProjectIdx}
                  setProjectSelected={setProjectIsSelected}
                />
              </GlassPane>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
