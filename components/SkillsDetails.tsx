import { iconGroups } from "@/components/icons";
import SkillIcon from "./SkillIcon";

export default function SkillsDetails({selectedField}) {
  return (
    <div className="flex flex-col gap-10 w-full h-full overflow-y-scroll">
      {selectedField.groups.map((iconGroup) => (
        <div className="flex flex-col gap-5" key={iconGroup}>
          <div className="text-2xl sm:text-3xl text-center sm:self-start self-center underline">{iconGroup}</div>
          <div className="flex flex-wrap gap-5 md:gap-20 items-center justify-center sm:justify-start">
            {iconGroups[iconGroup].map((icon) => (
              <SkillIcon icon={icon} key={icon.name}/>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
