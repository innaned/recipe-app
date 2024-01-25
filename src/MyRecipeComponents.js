import { useState } from "react";

function MyRecipeComponents({label, image, calories, ingredients, cuisineType}) {

    const [show, setShow] = useState(true)

    const ShowClick = () => {
        setShow(!show)
    }

    return (
            <div className="plan">
                <h2>{label}</h2>
                <img src={image} alt="recipies" width="200px"/>
                <h3>{cuisineType} cuisine</h3>
                
                <button className="btnIngredients" onClick={() => ShowClick()}>{show ? "ingredients" : 
                <ul>{ingredients.map(((ingrediant, index) => (
                    <li key={index}>
                        {ingrediant}</li>
                )))}</ul>
                }
                </button>
                <h2>{calories.toFixed()} calories</h2>
            </div>
        )
    }

export default MyRecipeComponents;