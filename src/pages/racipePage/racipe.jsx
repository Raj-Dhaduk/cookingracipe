import React from "react";
import RacipeDetalil from "./../../components/racipeDetalil/detalils";
import { useParams } from "react-router-dom";

const RacipePage = () => {
  const { id } = useParams();
  return (
    <div>
      <RacipeDetalil id={id} />
    </div>
  );
};

export default RacipePage;
