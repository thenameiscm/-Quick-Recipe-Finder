export default function MealCard({ meal, onSelect }) {
  return (
    <div
      className="bg-white shadow-lg rounded-xl p-3 cursor-pointer hover:shadow-2xl transition"
      onClick={() => onSelect(meal.idMeal)}
    >
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="rounded-md mb-3 w-full h-48 object-cover"
      />
      <h3 className="text-lg font-semibold text-gray-800 text-center">
        {meal.strMeal}
      </h3>
    </div>
  );
}
