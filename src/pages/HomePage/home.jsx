import { useState } from "react";
import SearchBar from "./../../components/searchBar/serach";

import axios from "axios";
import RacipeCard from "../../components/racipeCard/card";

function Home() {
  const [racipes, setRacipes] = useState([]);
  const handleSearch = async (query) => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch`,
        {
          params: {
            apiKey: "fe6cd5903de4461994da01ba4ee58c81",
            query,
          },
        }
      );
      console.log("Response data:", response.data);
      setRacipes(response.data.results);
      console.log("Updated state:", racipes);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };
  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div>
        {racipes.map((racipe) => (
          <RacipeCard key={racipe.id} racipe={racipe} />
        ))}
      </div>
    </div>
  );
}

export default Home;
