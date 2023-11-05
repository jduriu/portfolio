import GlassPane from "./Glass"
import PanAnimation from "./PanAnimation"
import ProjectDetails from "./ProjectDetails"

export default function PortfolioDetailsCard({
  selectedProjectIdx, selectedProject, setProjectIsSelected, projectIsSelected
}) {


  return (
    <GlassPane
    className={`justify-center h-full flex flex-col p-5 w-full rounded-lg sm:p-10 gap-5 sm:gap-10
      ${projectIsSelected ? "items-start" : "items-center"}
    `}
    paneColor="bg-black/50"
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
  )
}
