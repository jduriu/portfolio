import GlassPane from "./Glass"

export default function DetailButtons({selectCategory, selectedCategory}) {

    const categories = [
        {'id': 'technologyUsed', 'name': "Tech Stack",},
        {'id': 'challenges', 'name': "Challenges",},
        {'id': 'futurePlans', 'name': "Updates",},
        {'id': 'links', 'name': "Links",},
    ]

    return (
        <div className="flex gap-4 px-5">
            {categories.map((category) => (
                (category.id === selectedCategory ?
                    <button
                    key={category.name}
                    className="py-2 px-3 bg-slate-500/30 shadow-btn-inner  rounded-lg text-white
                    transition ease-in-out duration-200 delay-150"
                    onClick={() => selectCategory(category.id)}
                    >
                        {category.name}
                    </button>
                :
                    <button
                    key={category.name}
                    className="py-2 px-3 bg-slate-500/30 shadow-btn-outer rounded-lg text-white/70 hover:text-white"
                    onClick={() => selectCategory(category.id)}
                    >
                        {category.name}
                    </button>
                )
            ))}
        </div>
    )
}
