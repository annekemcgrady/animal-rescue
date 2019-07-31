import React from "react";
import Card from "./Card.js";
import { connect } from "react-redux";
import "./CardContainer.css";

const CardContainer = ({ animals }) => {
  const displayCards = animals.map(animal => {
    return (
      <Card
        key={Date.now()}
        img={animal.img}
        name={animal.name}
        species={animal.species}
        description={animal.description}
      />
    );
  });

  return <div className="card-container">{displayCards}</div>;
};

const mapStateToProps = state => ({
  animals: state.animals
});

export default connect(mapStateToProps)(CardContainer);
