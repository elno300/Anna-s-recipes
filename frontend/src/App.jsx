import "./index.css";
import RecipeForm from "./components/RecipeForm";
import RecipeCard from "./components/RecipeCard";
import { useEffect, useState } from "react";
import { fetchRecipes } from "./api/recipesApi";
import styled from "styled-components";

const CardContainer = styled.section`
  display: flex,
  width: 100vw;
  justify-content: center;
  padding: 45px;
`;

const CardWrapper = styled.section`
  display: flex;
  flex-wrap: wrap; /* Tillåt kort att byta rad */
  gap: 16px; /* Avstånd mellan korten */
`;

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [recipes, setRecipes] = useState(null);

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
      <RecipeForm className="absolute right-0 top-0 z-10" />
      <CardContainer>
        <CardWrapper className="flex flex-wrap justify-center gap-4 p-4">
          {recipes &&
            recipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
        </CardWrapper>
      </CardContainer>
    </>
  );
}

export default App;
