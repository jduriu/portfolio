import GlassPane from "./Glass"

export default function SkillsCard({field, setSelectedField}) {
  return (
    <GlassPane
    className="min-w-[300px] w-1/4 h-1/3 md:h-1/2 rounded-xl hover:-translate-y-5 transition duration-300"
    paneColor="bg-black/50"
    key={field.id}
    >
      <button
        className="w-full h-full flex items-center justify-center p-5"
        onClick={() => setSelectedField(field)}
      >
        <div className="text-4xl text-center">
          {field.name}
        </div>
      </button>
    </GlassPane>

  )
}
