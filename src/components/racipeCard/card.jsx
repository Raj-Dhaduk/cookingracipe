import React from "react";
import "./card.css";
import { Link } from "react-router-dom";

const RacipeCard = ({ racipe }) => {
  return (
    <div className="racipe-card ">
      <img src={racipe.image} />
      <h2>{racipe.title}</h2>
      <Link to={`/racipe/${racipe.id}`}>View Details</Link>
    </div>
  );
};

export default RacipeCard;
