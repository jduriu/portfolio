import Image from "next/image"

export default function ProjectCard({project}) {
    return (
        <div
        className="
        relative h-[100px] w-[100px] sm:h-[200px] sm:w-[200px]
        rounded-xl shadow-slate-500
        ">
            <div className="absolute top-0 h-full w-full">
                <Image
                fill
                src={project.image}
                alt={project.title}
                className="h-full w-full rounded-xl"
                />
            </div>
            <div
            className="
            absolute h-full w-full
            flex justify-center items-center rounded-xl
            text-black transition duration-300 hover:duration-150
            sm:text-2xl hover:backdrop-blur-lg opacity-0 hover:opacity-100
            ">
                {project.title}
            </div>
        </div>
    )
}
