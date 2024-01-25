import './App.css';
import { useEffect, useState } from 'react';
import icon from './icon.png'
import video from './video.mp4'
import MyRecipeComponents from './MyRecipeComponents';


function App() {

  const MY_ID = "0fe87fa5";
  const MY_KEY = "%20a9e1afcafead115428f745623aa00795";

  const [mySearch, setMySearch] = useState("");
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState("avocado");

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

  return (

    <div className="App">
      <div className="container">
        <video autoPlay muted loop>
        <source src={video} type="video/mp4" />
        </video>
        <h1>BEST Recipe App</h1>
      </div>

      <div className='container'>
        <form onSubmit={finalSearch}>
          <input className='search' placeholder='Search ...' onChange={myRecipeSearch} value={mySearch}/>
        </form>
        <button onClick={finalSearch}>
          <img src={icon} alt="icon" width="30px"/>
          </button>
        
      </div>

<div className='feature'>
      {myRecipes.map((element, index) => (
        <MyRecipeComponents key={index}
        label={element.recipe.label} 
        image={element.recipe.image} 
        calories={element.recipe.calories}
        cuisineType={element.recipe.cuisineType}
        ingredients={element.recipe.ingredientLines} />
        ))} 
</div>
</div>
  )
      }

export default App;
