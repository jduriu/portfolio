import Image from "next/image"

export default function ProjectCard({project}) {
    return (
        <div
        className="
        relative h-[100px] w-[100px] sm:h-[200px] sm:w-[200px]
        rounded-xl
        ">
            <div className="absolute top-0 h-full w-full">
                <Image
                width={400}
                height={600}
                src={project.image}
                alt={project.title}
                className="h-full w-full overflow-hidden rounded-xl"
                />
            </div>
            <div
            className="
            absolute h-full w-full
            flex justify-center items-center rounded-xl
            sm:text-2xl bg-black opacity-0 hover:opacity-100
            transition duration-400 ease-in-out
            ">
                {project.title}
            </div>
        </div>
    )
}
