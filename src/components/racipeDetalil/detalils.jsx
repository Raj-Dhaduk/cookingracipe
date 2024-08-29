import axios from "axios";
import React, { useEffect, useState } from "react";
import "./detalis.css";

const RacipeDetalil = ({ id }) => {
  const [recipe, setRacipe] = useState(null);

  useEffect(() => {
    const faetchDetails = async () => {
      try {
        const res = await axios.get(
          `https://api.spoonacular.com/recipes/${id}/information`,
          {
            params: {
              apiKey: "fe6cd5903de4461994da01ba4ee58c81",
            },
          }
        );
        setRacipe(res.data);
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      }
    };

    faetchDetails();
  }, [id]);
  if (!recipe) return <div>Loading...</div>;

  return (
    <div className="detalils">
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} />
      <p>{recipe.summary}</p>
      <h4>Ingredients:</h4>
      <ul>
        {recipe.extendedIngredients.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.original}</li>
        ))}
      </ul>
      <h4>Instructions:</h4>
      <div
        className="instruction"
        dangerouslySetInnerHTML={{ __html: recipe.instructions }}
      />
    </div>
  );
};

export default RacipeDetalil;
