import "./index.css";
import RecipeForm from "./components/RecipeForm";
import { useEffect } from 'react'


function App() {

  useEffect(() => {
    fetch('/api')
      .then((response) => response.json())
      .then((result) => {
        alert(`Hello ${result.hello}!`)
      })
  }, [])


  return (
    <>
      <div className="bg-blue-500 text-white p-4">
        <h1 className="text-3xl font-bold font-avenir">Hej, Tailwind CSS!</h1>
        <p className="font-avenir font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea deleniti
          aperiam et repudiandae architecto facilis consequuntur illum vel
          deserunt dolorum, veritatis velit repellat nobis aut quasi delectus
          eius, eveniet minus?
        </p>
      </div>
      {/* onSubmit={handleSubmit} */}
      <RecipeForm />
    </>
  );
}

export default App;
