export default function MealModal({ meal, onClose }) {
  if (!meal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60">
      <div className="bg-white rounded-2xl p-6 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
        >
          ✕
        </button>
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="rounded-lg mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">{meal.strMeal}</h2>
        <p className="text-sm text-gray-700 mb-4">
          Category: {meal.strCategory} | Area: {meal.strArea}
        </p>
        <p className="text-gray-600 text-sm leading-relaxed">
          {meal.strInstructions?.slice(0, 250)}...
        </p>
        <a
          href={meal.strYoutube}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 font-semibold block mt-4"
        >
          ▶️ Watch on YouTube
        </a>
      </div>
    </div>
  );
}
