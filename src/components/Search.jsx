import { useEffect } from "react";
import { useState } from "react";
import styles from "./search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "5e46755bd0bb45e2b1af7d49f4daa3da";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");
  // syntax of the useEffect Hook
  //   useEffect(() => {}, []);
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        className={styles.input}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
