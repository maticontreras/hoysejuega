import React from "react";
import Contador from "../Contador/Contador";
import CartButton from "../CartButton/cartButton.jsx";

import imagenCancha from '../../assets/images/cancha-futbol.jpeg'

const Card = () => {
  return (
    <div className="card">
      <img
        className="card-img-top"
        src={imagenCancha}
        alt="Card image cap"
      ></img>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <Contador stock={5} initial={1}/>
        <CartButton/>
      </div>
    </div>
  );
};

export default Card;
