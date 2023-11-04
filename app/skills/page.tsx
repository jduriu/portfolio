'use client'
import GlassPane from "@/components/Glass";
import { useState } from 'react'
import { IoArrowBackOutline } from 'react-icons/io5'
import { iconGroups } from "@/components/icons";


export default function SkillsPage() {

  const [selectedField, setSelectedField] = useState(null)

  const fields = [
    {"id": "software", "name": "Software Engineering",
      "groups": ["Languages", "System Design", "Frameworks", "Databases & Schema"]
    },
    {"id": "civil", "name": "Civil Engineering",
      "groups": ["Technologies", "Design", "Construction"]
    },
    {"id": "business", "name": "Business Development",
      "groups": ["Business"]
    },
  ]

  return (
    <div className="h-full w-full">
      <div className="bg-tahoe bg-center bg-cover fixed top-0 w-full h-full" />
      <div className="w-full fixed h-[calc(100%-50px)] mt-[50px] overflow-hidden">
        <div className="w-full h-full flex justify-center items-center gap-10 flex-wrap overflow-y-scroll sm:p-10 py-10 px-2">
          {selectedField ?
            <div className="w-full h-full">
              <GlassPane className="w-full h-full rounded-3xl p-5 flex flex-col gap-10 overflow-hidden" paneColor="bg-black/50">
                <div className="w-full h-full overflow-y-scroll p-5">
                  <button className="flex gap-2 pb-5 hover:underline hover:scale-105 transition duration-200"
                  onClick={() => setSelectedField(null)}
                  >
                    <IoArrowBackOutline size={25}/>
                    <div>Back</div>
                  </button>
                  <div className="w-full h-full flex flex-col gap-5">
                    <h1 className="text-5xl text-center self-center">{selectedField.name}</h1>
                    {selectedField.groups.map((iconGroup) => (
                      <div className="flex flex-col gap-5" key={iconGroup}>
                        <div className="text-3xl text-center sm:self-start self-center">{iconGroup}</div>
                        <div className="flex flex-wrap gap-5 items-center justify-center sm:justify-start">
                          {iconGroups[iconGroup].map((icon) => (
                            <div className="flex flex-col justify-center items-center" key={icon.name}>
                              {<icon.icon size={30}/>}
                              <div>{icon.name}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </GlassPane>
            </div>
            :
            fields.map((field) => (
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
            ))
          }
        </div>
      </div>
    </div>
  );
}
