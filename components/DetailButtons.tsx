export default function DetailButtons({ selectCategory, selectedCategory }) {
  const categories = [
    { id: "technologyUsed", name: "Tech Stack" },
    { id: "challenges", name: "Challenges" },
    { id: "futurePlans", name: "Updates" },
    { id: "links", name: "Links" },
  ];
  const buttonClasses = " py-2 px-3 bg-slate-500/30 rounded-lg ";

  return (
    <div className="flex gap-4 px-5">
      {categories.map((category) =>
        category.id === selectedCategory ? (
          <button
            key={category.name}
            className={buttonClasses + "shadow-btn-inner  text-white"}
            onClick={() => selectCategory(category.id)}
          >
            {category.name}
          </button>
        ) : (
          <button
            key={category.name}
            className={
              buttonClasses + "shadow-btn-outer  text-white/70 hover:text-white"
            }
            onClick={() => selectCategory(category.id)}
          >
            {category.name}
          </button>
        )
      )}
    </div>
  );
}
