"use client";

import Image from "next/image";
import { useState } from "react";
import DetailButtons from "@/components/DetailButtons";

export default function ProjectDetails({ project, setProjectIsSelected }) {
  const [selectedContent, setSelectedContent] = useState("challenges");

  return (
    <div
      className="h-full w-full overflow-y-scroll
        flex flex-col gap-5"
    >
      <div className="flex flex-col lg:grid grid-cols-2 row-span-2 ">
        <div className="before:flex flex-col justify-center items-center p-5">
          <button
            className="self-start pb-5 underline"
            onClick={() => setProjectIsSelected(false)}
          >
            Back to List View
          </button>
          <Image
            src={project.image}
            alt={project.title}
            className="rounded-3xl shadow-glass"
          />
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
          {project[selectedContent]}
        </div>
      </div>
    </div>
  );
}
