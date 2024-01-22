import Recipe from "./Recipe";

function MyRecipeComponents({label, image, calories, ingredients}) {

    return (
            <div className="plan">
                <h2>{label}</h2>
                <img src={image} alt="recipies" width="200px"/>
                <ul>{ingredients.map(((ingrediant, index) => (
                    <li key={index}>
                        <img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-check-multimedia-kiranshastry-gradient-kiranshastry.png" className="check" alt="icon"/>
                        {ingrediant}</li>
                )))}</ul>
                <h2>{calories.toFixed()} calories</h2>
            </div>
        )
    }

export default MyRecipeComponents;