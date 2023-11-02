import Image from "next/image";

export default function ProjectCard({
  project,
  setSelectedId,
  setProjectSelected,
}) {
  const handleSelect = (id) => {
    setSelectedId(id);
    setProjectSelected(true);
  };

  return (
    <div
      className="relative h-[100px] w-[100px] lg:h-[200px] lg:w-[200px]
				rounded-xl shadow-slate-500"
    >
      <div className="absolute top-0 h-full w-full">
        <Image
          fill
          src={project.image}
          alt={project.title}
          className="h-full w-full rounded-xl"
          onClick={() => handleSelect(project.id)}
        />
      </div>
      <div
        className="absolute h-full w-full
					hidden
					sm:flex justify-center items-center rounded-xl
				text-black transition duration-300 hover:duration-150
					sm:text-2xl hover:backdrop-blur-lg opacity-0 hover:opacity-100"
        onClick={() => handleSelect(project.id)}
      >
        {project.title}
      </div>
    </div>
  );
}
