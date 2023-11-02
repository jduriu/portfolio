import GlassPane from "./Glass"

export default function DetailButtons({selectedContent, setSelectedContent}) {

    const categories = [
        {'id': 'technologyUsed', 'name': "Tech Stack",},
        {'id': 'challenges', 'name': "Challenges",},
        {'id': 'futurePlans', 'name': "Updates",},
        {'id': 'links', 'name': "Links",},
    ]

    return (
        <div className="flex gap-4 px-5">
            {categories.map((category) => (
                (category.id === selectedContent ?
                    <button
                    key={category.name}
                    className="py-2 px-3 bg-slate-500/20 shadow-btn-inner rounded-lg text-white"
                    onClick={() => setSelectedContent(category)}
                    >
                        {category.name}
                    </button>
                :
                    <button
                    key={category.name}
                    className="py-2 px-3 bg-slate-500/20 shadow-btn-outer rounded-lg text-slate-300 hover:text-slate-100"
                    onClick={() => setSelectedContent(category)}
                    >
                        {category.name}
                    </button>
                )
            ))}
        </div>
    )
}
