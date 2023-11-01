'use client'

import Image from "next/image"

export default function ProjectDetails({project}) {


    return (
        <div className="h-full box-border grid grid-rows-6">
            <div className="row-span-4 grid grid-cols-4">
                <div className="p-5 col-span-3">
                    <Image
                    src={project.image}
                    alt={project.title}
                    className="h-full w-[50%] rounded-xl"
                    />
                </div>
                <div className="flex flex-col gap-10 items-center py-10">
                    <div>Project Navigation</div>
                    <div>Description</div>
                    <div>Stack</div>
                    <div>Challenges</div>
                    <div>Future Plans</div>
                    <div>Links</div>
                </div>
            </div>
            <div className="flex justify-start items-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                {/* <div>{selectedLabel}</div> */}
            </div>
            {/* <div>
                <h1>Title:</h1>
                <div>{project.title}</div>
            </div>
            <div>
                <h1>Description:</h1>
                <div>{project.description}</div>
            </div>
            <div>
                <h1>Challenges:</h1>
                <div>{project.challenges}</div>
            </div>
            <div>
                <h1>Future Plans:</h1>
                <div>{project.futurePlans}</div>
            </div>
            <div>
                <h1>Links:</h1>
                <div>{project.git}</div>
                <div>{project.deployed}</div>
            </div> */}
        </div>
    )
}
