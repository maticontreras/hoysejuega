import React from "react";
import ShoppingIcon from "../../assets/icon-shopping.png";
import "./cartwidget.css";

const CartWidget = () => {
  return (
    <div className="contenedor-carrito">
      <button>
        <img className="cart-icon" src={ShoppingIcon}></img>
        <span>4</span>
      </button>
      
    </div>
  );
};

export default CartWidget;
