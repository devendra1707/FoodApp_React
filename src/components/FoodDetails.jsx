import styles from "./fooddetails.module.css";

import { useState } from "react";
import { useEffect } from "react";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "5e46755bd0bb45e2b1af7d49f4daa3da";

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);

  return (
    <div>
      <div className={styles.recipeCard}>
        <h2 className={styles.recipeName}> {food.title}</h2>
        <img className={styles.recipeImage} src={food.image} alt="" />
        <div className={styles.recipeDetails}>
          <span>
            <strong>⌚{food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>👨‍👩‍👧 Serve {food.servings}</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? " 🥕 Vegetarian" : " 🍖 Non-Vegetarian"}
            </strong>{" "}
          </span>
          <span>
            <strong>{food.vegin ? " 🐄 Vegan" : ""}</strong>
          </span>
        </div>
        <div>
          <span>
            <strong>💲{food.pricePerServing / 100} Per Serving</strong>
          </span>
        </div>

        <h2>Ingredients</h2>
        {/* {food.} */}
        <h2>Instructions</h2>
        <div className={styles.recipeInstructions}>
          <ol>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
