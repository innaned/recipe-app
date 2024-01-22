import './App.css';
import { useEffect, useState } from 'react';
import image from './imageFood.jpg'
import icon from './icon.png'
import MyRecipeComponents from './MyRecipeComponents';
import Recipe from './Recipe';
import New from './New';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  const MY_ID = "0fe87fa5";
  const MY_KEY = "%20a9e1afcafead115428f745623aa00795";

  const [mySearch, setMySearch] = useState("");
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState("avocado");
  const [btn, setBtn] = useState("Ingredients")

  useEffect(() => {
    const getRecipe = async() => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await response.json();
      setMyRecipes(data.hits)
    }
    getRecipe()
  }, [wordSubmitted])

const myRecipeSearch = (e) => {
setMySearch(e.target.value);
}

const finalSearch = (e) => {
  e.preventDefault()
  setWordSubmitted(mySearch)
}

//const completeRecipe = () => {
//  setBtn(<New />)
//}

  return (

    <div className="App">

      <div className="container">
        <img src={image} alt='food' className='imageFood' />
        <h1>BEST Recipe App</h1>
      </div>

      <div className='container'>
        <form onSubmit={finalSearch}>
          <input className='search' placeholder='Search ...' onChange={myRecipeSearch} value={mySearch}/>
        </form>
      </div>

      <div className='container'>
        <button onClick={finalSearch}>
          <img src={icon} alt="icon" width="50px"/>
        </button>
      </div>

<div className='feature'>
      {myRecipes.map((element, index) => (
        <MyRecipeComponents key={index}
        label={element.recipe.label} 
        image={element.recipe.image} 
        calories={element.recipe.calories}
        ingredients={element.recipe.ingredientLines} />
        ))} 
</div>
</div>
  )
      }

export default App;
