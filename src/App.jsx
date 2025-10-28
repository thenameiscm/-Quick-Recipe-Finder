import { useState } from "react";
import SearchBar from "./Components/SearchBar";
import MealCard from "./Components/MealCard";
import MealModal from "./Components/MealModal";

function App() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedMeal, setSelectedMeal] = useState(null);

  const fetchMeals = async (ingredient) => {
    setLoading(true);
    setError("");
    setMeals([]);

    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await res.json();
      if (!data.meals) {
        setError("No recipes found for that ingredient.");
      } else {
        setMeals(data.meals);
      }
    } catch {
      setError("Failed to fetch data.");
    } finally {
      setLoading(false);
    }
  };

  const fetchMealDetails = async (idMeal) => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    );
    const data = await res.json();
    setSelectedMeal(data.meals[0]);
  };

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-6">
        🥘 Quick Recipe Finder
      </h1>
      <SearchBar onSearch={fetchMeals} />
      {loading && <p className="text-center text-gray-600">Loading...</p>}
      {error && <p className="text-center text-red-600">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center mt-6">
        {meals.map((meal) => (
          <MealCard key={meal.idMeal} meal={meal} onSelect={fetchMealDetails} />
        ))}
      </div>
      {selectedMeal && (
        <MealModal meal={selectedMeal} onClose={() => setSelectedMeal(null)} />
      )}
    </div>
  );
}

export default App;
