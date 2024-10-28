import { useState } from "react";

const RecipeForm = () => {
  // State-variabler för varje inputfält
  const [title, setTitle] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [category, setCategory] = useState("");
  const [servings, setServings] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const recipeData = {
      name: title,
      cook_time: cookTime,
      description,
      img_url: "image1", // För enkelhetens skull
      servings,
      course_id: category,
    };

    try {
      const response = await fetch("/api/new-recipe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(recipeData),
      });

      if (!response.ok) {
        throw new Error("Kunde inte lägga till receptet");
      }

      const newRecipe = await response.json();
      console.log("Nytt recept tillagt:", newRecipe);

      // Rensa fält efter skickat formulär
      setTitle("");
      setCookTime("");
      setCategory("");
      setServings("");
      setDescription("");
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg font-avenir border border-gray-300 rounded-lg p-6 shadow-md"
    >
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            htmlFor="grid-title"
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          >
            Titel:
          </label>
          <input
            type="text"
            id="grid-title"
            placeholder="Spagetti med köttfärsås"
            required
            className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 py-3 px-4 mb-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)} // Uppdaterar title state
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/3 px-3">
          <label
            htmlFor="grid-cook-time"
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          >
            Tillagningstid:
          </label>
          <input
            type="text"
            id="grid-cook-time"
            placeholder="60 min"
            required
            className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 py-3 px-4 mb-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            value={cookTime}
            onChange={(e) => setCookTime(e.target.value)} // Uppdaterar cookTime state
          />
        </div>
        <div className="w-full md:w-1/3 px-3">
          <label
            htmlFor="grid-category"
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          >
            Kategori:
          </label>
          <select
            id="grid-category"
            required
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            value={category}
            onChange={(e) => setCategory(e.target.value)} // Uppdaterar category state
          >
            <option value="" disabled>
              Välj en kategori
            </option>
            <option value={1}>Dessert</option>
            <option value={2}>Gryta</option>
            <option value={3}>Gratäng</option>
            <option value={4}>Pasta</option>
            <option value={5}>Sallad</option>
            <option value={6}>Soppa</option>
          </select>
        </div>
        <div className="w-full md:w-1/3 px-3">
          <label
            htmlFor="grid-servings"
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          >
            Antal portioner:
          </label>
          <select
            id="grid-servings"
            required
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            value={servings}
            onChange={(e) => setServings(e.target.value)} // Uppdaterar servings state
          >
            <option value="" disabled>
              Välj antal portioner
            </option>
            {[...Array(8)].map((_, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            htmlFor="grid-description"
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          >
            Beskrivning:
          </label>
          <textarea
            id="grid-description"
            placeholder="Skriv en kort beskrivning av receptet här..."
            required
            className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 py-3 px-4 mb-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-32"
            value={description}
            onChange={(e) => setDescription(e.target.value)} // Uppdaterar description state
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4"
        >
          Lägg till nytt recept
        </button>
      </div>
    </form>
  );
};

export default RecipeForm;
