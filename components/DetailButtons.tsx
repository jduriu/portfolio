export default function DetailButtons({ selectCategory, selectedCategory }) {
  const categories = [
    { id: "technologyUsed", name: "Tech Stack" },
    { id: "challenges", name: "Challenges" },
    { id: "futurePlans", name: "Updates" },
    { id: "links", name: "Links" },
  ];
  const buttonClasses = "text-white py-2 px-3 bg-black/50 rounded-lg ";

  return (
    <div className="flex w-full flex-wrap justify-center sm:justify-start gap-4 px-5">
      {categories.map((category) =>
        category.id === selectedCategory ? (
          <button
            key={category.name}
            className={buttonClasses + "shadow-btn-inner transition duration-500"}
            onClick={() => selectCategory(category.id)}
          >
            {category.name}
          </button>
        ) : (
          <button
            key={category.name}
            className={
              buttonClasses + "shadow-btn-outer hover:text-white transition duration-500"
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
