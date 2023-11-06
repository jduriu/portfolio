import { iconGroups } from "@/components/IconLibrary";
import SkillIcon from "./SkillIcon";

export default function SkillsDetails({selectedField}) {
  return (
    <div className="flex flex-col gap-10 w-full h-full overflow-y-scroll">
      {selectedField.groups.map(group => (
        <div className="flex flex-col gap-5" key={group}>
          <div className="text-2xl sm:text-3xl text-center sm:self-start self-center underline">{group}</div>
          <div className="flex flex-wrap gap-5 md:gap-20 items-center justify-center sm:justify-start">
            {iconGroups[group].map((icon) => (
              <SkillIcon icon={icon} key={icon}/>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
