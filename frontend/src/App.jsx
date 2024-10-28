import "./index.css";
import RecipeForm from "./components/RecipeForm";
import { useEffect } from 'react'
import RecipeCard from "./components/RecipeCard";
import RecipeList from "./components/RecipeList";


function App() {

  useEffect(() => {
    fetch('/api')
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        // alert(`Hello ${result[0].name}!`)

      })
  }, [])

  useEffect(() => {
    fetch('/api/recipes')
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        // alert(`Hello ${result[0].name}!`)

      })
  }, [])


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
      <RecipeCard/>
      <RecipeList/>
    </>
  );
}

export default App;
