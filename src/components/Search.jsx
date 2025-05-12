import { useEffect, useState } from "react";
import styles from "./search.module.css";
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "ae721eebfe7d4c3da5d3fffe6a4139c8";
export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("Pizza");
  //Syntax of the useEffect hook
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`); //Using dollar u could create dynamic strings
      const data = await res.json() //bcz above will be in json in order to decode it we use 
      console.log(data.results)
      setFoodData(data.results)
        
      
    }
     
    
      

    fetchFood();
  }, [query]);
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
    </div>
  );
}
