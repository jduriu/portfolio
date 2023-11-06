import SkillIcon from "./SkillIcon";

export default function ProjectDetailArray({content, selectedContent}) {
  return (
    <div className="flex flex-wrap w-full gap-5">
    {selectedContent === "technologyUsed" ?
      content.map(icon => (
        <SkillIcon icon={icon}/>
      ))
      :
      null
      // {content.map(item => (
      //   <div key={item}>{item}</div>
      // ))}
    }
  </div>
  )
}
