// API-anrop till backend
// api.js
export const fetchRecipes = async () => {
  const response = await fetch('/api/recipes'); 
  if (!response.ok) {
    throw new Error('Något gick fel vid hämtning av recepten');
  }
  const data = await response.json();
  return data;
};
