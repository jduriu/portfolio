"use client";
import { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolioData";
import PortfolioProjectScroller from "@/components/PortfolioProjectScroller";
import PortfolioDetailsCard from "@/components/PortfolioDetailsCard";

export default function PortfolioPage() {
  const [projectIsSelected, setProjectIsSelected] = useState(false);
  const [selectedProjectIdx, setSelectedProjectIdx] = useState(-1);
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
          <PortfolioDetailsCard
            selectedProjectIdx={selectedProjectIdx}
            setSelectedProjectIdx={setSelectedProjectIdx}
            selectedProject={selectedProject}
            setProjectIsSelected={setProjectIsSelected}
            projectIsSelected={projectIsSelected}
          />
        </div>
        <PortfolioProjectScroller
          projectIsSelected={projectIsSelected}
          portfolioData={portfolioData}
          setProjectIsSelected={setProjectIsSelected}
          setSelectedProjectIdx={setSelectedProjectIdx}
          selectedProjectIdx={selectedProjectIdx}
        />
      </div>
    </div>

  );
}
