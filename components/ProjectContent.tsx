import Link from "next/link";
import SkillIcon from "./SkillIcon";

export default function ProjectContent({project, selectedContent}) {
  const content = project[selectedContent]

  return (
    <div className="flex flex-wrap w-full gap-5">
    {selectedContent === "technologyUsed" || selectedContent === "links" ?
      selectedContent === "technologyUsed" ?
        content.map((icon) => (
          <SkillIcon icon={icon} key={icon}/>
        ))
      :
        project.deployed && project.gitLink
          ? (
              <>
              <Link href={project.gitLink}  target="_blank">
                <SkillIcon icon="Repository"/>
              </Link>
              <Link href={project.deployed}  target="_blank">
                <SkillIcon icon="Deployed"/>
              </Link>
              </>
          ):
          <Link href={project.gitLink} target="_blank">
            <SkillIcon icon="Repository"/>
          </Link>
      :
      content
    }
  </div>
  )
}
