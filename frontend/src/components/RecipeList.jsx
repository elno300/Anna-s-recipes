import { useEffect, useState } from 'react';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Hämta data från backend
    const fetchRecipes = async () => {
      try {
        const response = await fetch('/api/recipes'); // URL:en kan variera beroende på din backend
        if (!response.ok) {
          throw new Error('Något gick fel vid hämtning av recept.');
        }
        const data = await response.json();
        setRecipes(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    

  //   fetch('/api/recipes')
  // .then((response) => response.text())
  // .then((data) => console.log(data));

    fetchRecipes();
  }, []);

  if (loading) return <p>Laddar...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="recipe-list">
      <h2>Recept</h2>
      {recipes.length === 0 ? (
        <p>Inga recept tillgängliga.</p>
      ) : (
        recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <p>Tillagningstid: {recipe.cooking_time} minuter</p>
            <p>Portioner: {recipe.servings}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
