"use client";

import Image from "next/image";
import { useState } from "react";
import DetailButtons from "@/components/DetailButtons";
import ProjectContent from "./ProjectContent";
import Link from "next/link";

export default function ProjectDetails({ project, setProjectIsSelected, setSelectedProjectIdx }) {
  const [selectedContent, setSelectedContent] = useState("");


  return (
    <div
      className="h-full w-full overflow-y-scroll
        flex flex-col gap-5"
    >
      <div className="flex flex-col lg:grid grid-cols-2 row-span-2 ">
        <div className="before:flex flex-col justify-center items-center p-5">
          <button
            className="self-start pb-5 underline"
            onClick={() => {
              setProjectIsSelected(false)
              setSelectedProjectIdx(-1)
            }}
          >
            Back to List View
          </button>
          <Link href={project.deployed ? project.deployed : project.gitLink} target="_blank">
            <Image
              src={project.image}
              alt={project.title}
              className="rounded-3xl shadow-glass hover:scale-[102%] transition duration-300"
            />
          </Link>
        </div>
        <div className="flex flex-col justify-center items-start gap-5 px-5">
          <div className="text-3xl">{project.title}</div>
          <div className="lg:text-xl">{project.description}</div>
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
          <ProjectContent project={project} selectedContent={selectedContent}/>
        </div>
      </div>
    </div>
  );
}
