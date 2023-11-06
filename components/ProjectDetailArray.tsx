export default function ProjectDetailArray({content, selectedContent}) {
  return (
    <div className="flex flex-col w-full gap-5">
    {selectedContent === "technologyUsed" ?
    null
      // Consider refactoring Icons to be usable across the application??
      :
      null
      // {content.map(item => (
      //   <div key={item}>{item}</div>
      // ))}
    }
  </div>
  )
}
