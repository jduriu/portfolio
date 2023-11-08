import GlassPane from "./Glass"
import ProjectCard from "./ProjectCard"


export default function PortfolioProjectScroller({
  projectIsSelected, portfolioData, setProjectIsSelected, setSelectedProjectIdx, selectedProjectIdx
}) {
  return (
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
            selectedProjectIdx={selectedProjectIdx}
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
  )
}
