import { iconLibrary } from '@/components/IconLibrary'

export default function SkillIcon({icon}) {

  const Icon = iconLibrary[icon]

  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <div className="text-xl sm:text-7xl hover:-translate-y-2 transition easeinout duration-300">
        <Icon/>
      </div>
      <div className="max-w-[100px] text-center">{icon}</div>
    </div>
  )
}
