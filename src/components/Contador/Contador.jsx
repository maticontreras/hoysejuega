import React, { useState } from "react";
import "./contador.css";
import plusIcon from "../../assets/images/icons-plus.png";
import minusIcon from "../../assets/images/icons-minus.png";

const Contador = ({stock , initial}) => {
  
  const [contador, setContador] = useState(initial);
  const handlerRemove = () => { 
        contador > initial ? setContador(contador - 1) : alert('El stock no puede ser menor que 1')
  }
  
  const handlerAdd = () => {
        contador < stock ? setContador(contador + 1) : alert('Superaste el stock')
  }

  return (
    <div className="container-contador">
      <div className="div-restar">
        <button
          className="boton-restar"
          onClick={handlerRemove}
        >
          <img className="img-minus" src={minusIcon}></img>
        </button>
      </div>
      <div className="div-contador">
        <h1 className="contador">{contador}</h1>
      </div>

      <div className="div-sumar">
        <button
          className="boton-sumar"
          onClick={handlerAdd}
        >
          <img className="img-plus" src={plusIcon}></img>
        </button>
      </div>
    </div>
  );
  };
export default Contador;
