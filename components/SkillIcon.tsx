
export default function SkillIcon({icon}) {
  return (
    <div className="flex flex-col justify-center items-center gap-3" key={icon.name}>
      <div className="text-xl sm:text-7xl hover:-translate-y-2 transition easeinout duration-300">
        {<icon.icon/>}
      </div>
      <div className="max-w-[100px] text-center">{icon.name}</div>
    </div>
  )
}
