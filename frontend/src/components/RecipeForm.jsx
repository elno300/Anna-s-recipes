const RecipeForm = () => {

  return (
    // <form className="w-full max-w-lg font-avenir">
    <form className="max-w-lg font-avenir border border-gray-300 rounded-lg p-6 shadow-md">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-title"
          >
            Titel:
          </label>
          <input
            className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 py-3 px-4 mb-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" // Här är mb-4
            id="grid-title"
            type="text"
            placeholder="Spagetti med köttfärsås"
            required
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/3 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-cook-time"
          >
            Tillagningstid:
          </label>
          <input
            className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 py-3 px-4 mb-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" // Här är mb-4
            id="grid-cook-time"
            type="text"
            placeholder="60 min"
            required
          />
        </div>
        <div className="w-full md:w-1/3 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-category"
          >
            Kategori:
          </label>
          <div className="relative mb-4"> {/* Här är mb-4 */}
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-category"
              required
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
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-servings"
          >
            Antal portioner:
          </label>
          <div className="relative mb-4"> {/* Här är mb-4 */}
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-servings"
              required
            >
              <option value="" disabled>
                Välj antal portioner
              </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* Textarea för beskrivning */}
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-description"
          >
            Beskrivning:
          </label>
          <textarea
            className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 py-3 px-4 mb-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-32" // Här är mb-4
            id="grid-description"
            placeholder="Skriv en kort beskrivning av receptet här..."
            required
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4"
          type="submit"
        >
          Lägg till nytt recept
        </button>
      </div>
    </form>
  );
};

export default RecipeForm;
