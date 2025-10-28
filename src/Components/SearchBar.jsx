import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [ingredient, setIngredient] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ingredient.trim()) onSearch(ingredient);
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mb-6">
      <input
        type="text"
        placeholder="Enter an ingredient (e.g. chicken, rice)..."
        className="border p-2 w-80 rounded-l-lg focus:outline-none"
        value={ingredient}
        onChange={(e) => setIngredient(e.target.value)}
      />
      <button
        type="submit"
        className="bg-green-600 text-white px-4 rounded-r-lg hover:bg-green-700"
      >
        Search
      </button>
    </form>
  );
}
