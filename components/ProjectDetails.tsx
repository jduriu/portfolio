'use client'

import Image from "next/image"
import { useState, useEffect } from "react"
import DetailButtons from '@/components/DetailButtons'

export default function ProjectDetails({project}) {

    const [selectedContent, setSelectedContent] = useState('challenges')
    const [content, setContent] = useState()

    useEffect(() => {
        console.log('useEffect fired')
        for (let [k, v] of Object.entries(project)) {
          if (selectedContent === k) {
            setContent(v)
          }
        }
      }, [selectedContent, project])

    return (
        <div className="h-full w-full overflow-y-scroll
        grid grid-rows-3"
        >
            <div className="grid grid-cols-2 row-span-2 ">
                <div className="flex justify-center items-center p-5">
                    <Image
                    src={project.image}
                    alt={project.title}
                    className="rounded-3xl shadow-glass opacity-90"
                    />
                </div>
                <div className="flex flex-col justify-center items-start gap-5 px-5">
                    <div className="text-3xl">{project.title}</div>
                    <div className="text-xl">{project.description}</div>
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <div className="w-full">
                    <DetailButtons
                    selectCategory={setSelectedContent}
                    selectedCategory={selectedContent}
                    />
                </div>
                <div className="px-5">
                    {content}
                </div>
            </div>
        </div>
    )
}
