import React from "react";
import ShoppingIcon from "../../assets/icon-shopping.png";
import "./cartwidget.css";
import {Link} from 'react-router-dom'

const CartWidget = () => {
  return (
    <div className="contenedor-carrito">
      <Link to={"/cart"} className="carrito">
        <img className="cart-icon" src={ShoppingIcon}></img>
        <span>4</span>
      </Link>
    </div>
  );
};

export default CartWidget;
