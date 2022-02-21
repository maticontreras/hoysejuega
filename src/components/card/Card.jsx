import React, { useState , useEffect } from "react";
import Contador from "../Contador/Contador";
import CartButton from "../CartButton/cartButton.jsx";
import "./card.css";
import Description from "../Description/Description";


const Card = ({products}) => {
return (
    <div className="card-container">
      {products && products.map((c) => (
        <>
          <div className="body-card" key={c.id}>
            <img
              key={c.id}
              className="card-img-top"
              src={c.img}
              alt="Card image cap"
            ></img>
            <h5 className="card-title">{c.name}</h5>
            <p className="card-text">{c.direccion}</p>
            <Contador stock={c.stock} initial={1} />
            <Description item={c.id} />
            <CartButton />
          </div>

          
        </>
      ))}
    </div>
  );
};

export default Card;



