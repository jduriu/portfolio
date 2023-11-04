'use client'
import SkillsCard from "@/components/SkillsCard";
import SkillsDetailCard from "@/components/SkillsDetailCard";
import { useState } from 'react'

export default function SkillsPage() {

  const [selectedField, setSelectedField] = useState(null)

  const fields = [
    {"id": "software", "name": "Software Engineering",
      "groups": ["Languages", "System Design", "Frameworks", "Databases & Schema"]
    },
    {"id": "civil", "name": "Civil Engineering",
      "groups": ["Technologies", "Design", "Construction", "Business"]
    },
  ]

  return (
    <div className="h-full w-full">
      <div className="bg-tahoe bg-center bg-cover fixed top-0 w-full h-full" />
      <div className="w-full fixed h-[calc(100%-50px)] mt-[50px] overflow-hidden">
        <div className="w-full h-full flex justify-center items-center gap-10 flex-wrap overflow-y-scroll sm:p-10 py-10 px-2">
          {selectedField ?
            <SkillsDetailCard selectedField={selectedField} setSelectedField={setSelectedField}/>
            :
            fields.map((field) => (
              <SkillsCard key={field.id} field={field} setSelectedField={setSelectedField}/>
            ))
          }
        </div>
      </div>
    </div>
  );
}
