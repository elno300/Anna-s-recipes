import "./index.css";
import RecipeForm from "./components/RecipeForm";
// import { useEffect } from 'react'
import RecipeCard from "./components/RecipeCard";
import { useEffect, useState } from "react";
// import RecipeList from "./components/RecipeList";
import { fetchRecipes } from "./api/recipesApi";

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
const [recipes, setRecipes] = useState(null);

// useEffect(()=>{
//     fetch('/api/recipes')
//       .then((response) => response.json())
//       .then((result) => {
//         console.log(result, 'från api/recipes')
//         setRecipes[result]
//       })

// },[])
useEffect(() => {
  (async () => {
    try {
      const data = await fetchRecipes(); // Hämta recepten från API
      setRecipes(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  })();
}, []);

if (loading) return <p>Laddar...</p>;
if (error) return <p>{error}</p>;

  return (
    <>

      <div className="bg-red-300 text-white p-4">
        <h1 className="text-3xl font-bold font-avenir">Annas Recept</h1>
        <p className="font-avenir font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea deleniti
          aperiam et repudiandae architecto facilis consequuntur illum vel
          deserunt dolorum, veritatis velit repellat nobis aut quasi delectus
          eius, eveniet minus?
        </p>
      </div>
      {/* onSubmit={handleSubmit} */}
      <RecipeForm />
      {recipes && (recipes.map((recipe) => (
   <RecipeCard key={recipe.id} recipe={recipe}/>
      ))) }

    </>
  );
}

export default App;
