import Link from "next/link";
import SkillIcon from "./SkillIcon";

export default function ProjectContent({project, selectedContent}) {
  const content = project[selectedContent]

  return (
    <div className="flex flex-wrap w-full gap-5">
    {selectedContent === "technologyUsed" || selectedContent === "links" ?
      selectedContent === "technologyUsed" ?
        content.map(icon => (
          <SkillIcon icon={icon}/>
        ))
      :
        <div className="flex flex-wrap gap-5">
          {project.deployed && project.gitLink ? (
            <>
              <Link href={project.gitLink} className="py-2 px-3 border border-white/50 rounded-xl">
                Repository
              </Link>
              <Link href={project.deployed} className="py-2 px-3 border border-white/50 rounded-xl">
                Deployed Site
              </Link>
            </>
          ):
            <Link href={project.git}>Repository</Link>
          }
        </div>
    :
    content
    }
  </div>
  )
}
