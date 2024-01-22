function Recipe({label, image, calories, ingredients}) {
    return (
    <div>
        <div className="container">
            <h2>{label}</h2>
        </div>

        <div className="container">
            <img src={image} alt="recipies"/>
        </div>

        <div className="container">
            <ul>{ingredients.map(((ingrediant, index) => (
                <li key={index}>
                    <img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-check-multimedia-kiranshastry-gradient-kiranshastry.png" className="check" alt="icon"/>
                    {ingrediant}</li>
            )))}</ul>
        </div>

        <div className="container">
            <h2>{calories.toFixed()} calories</h2>
        </div>
    </div>
    )
}

export default Recipe;




      //ingredients={element.recipe.ingredientLines}