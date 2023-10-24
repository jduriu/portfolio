import Image from "next/image"

export default function ProjectCard({project}) {
    return (
        <div className="h-[250px] w-[500px] border-2 border-white rounded-xl flex justify-center items-center opacity-50 hover:opacity-100">
                <Image
                width={400}
                height={600}
                src={project.image}
                alt={project.title}
                className="h-full w-full overflow-hidden rounded-xl"
                />
        </div>
    )
}
