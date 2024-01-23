function MyRecipeComponents({label, image, calories, ingredients, cuisineType, url}) {

    return (
            <div className="plan">
                <h2>{label}</h2>
                <img src={image} alt="recipies" width="200px"/>
                <h3>{cuisineType} cuisine</h3>
                <button onClick={url}>Recipe</button>
                <ul>{ingredients.map(((ingrediant, index) => (
                    <li key={index}>
                        {ingrediant}</li>
                )))}</ul>
                <h2>{calories.toFixed()} calories</h2>
            </div>
        )
    }

export default MyRecipeComponents;