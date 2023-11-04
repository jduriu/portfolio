import GlassPane from "./Glass"
import { IoArrowBackOutline } from 'react-icons/io5'
import SkillsDetails from "./SkillsDetails"


export default function SkillsDetailCard({selectedField, setSelectedField}) {
  return (
    <div className="w-full h-full">
    <GlassPane className="w-full h-full rounded-3xl p-10 md:p-16 flex flex-col gap-5 overflow-hidden" paneColor="bg-black/50">
        <button className="w-fit flex gap-2 hover:underline hover:scale-105 transition duration-200"
        onClick={() => setSelectedField(null)}
        >
          <IoArrowBackOutline size={25}/>
          <div>Back</div>
        </button>
        <div className="w-full h-full flex flex-col gap-5 overflow-hidden lg:px-40">
          <h1 className="text-3xl sm:text-5xl text-center self-center py-3">{selectedField.name}</h1>
          <SkillsDetails selectedField={selectedField}/>
        </div>
    </GlassPane>
  </div>
  )
}
