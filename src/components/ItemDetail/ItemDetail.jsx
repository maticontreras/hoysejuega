import React, { useState, useEffect } from "react";
import "./itemDetail.css";
import Contador from "../Contador/Contador";
import imagenCanchas from "../../assets/images/principal.jpeg";
import miniatura1 from "../../assets/images/thumbnail1.jpeg";
import miniatura2 from "../../assets/images/thumbnail2.jpeg";
import miniatura3 from "../../assets/images/thumbnail3.jpeg";
import miniatura4 from "../../assets/images/thumbnail4.jpeg";
import miniatura5 from "../../assets/images/thumbnail5.jpeg";


const ItemDetail = ({details}) => {
  console.log(details);
  const stock = 10;
  return (
    <div className="row">
      <div className="contenedor-img col-8">
        <div className="contenedor-descripcion col-12">
          <div className="wrapper-miniaturas col-md-2">
            <div className="miniaturas col-12">
              <img className="miniatura" src={miniatura1}/>
            </div>
            <div className="miniaturas col-12">
            <img className="miniatura"  src={miniatura2}/>
            </div>
            <div className="miniaturas col-12">
            <img className="miniatura"  src={miniatura3}/>
            </div>
            <div className="miniaturas col-12">
            <img className="miniatura"  src={miniatura4}/>
            </div>
            <div className="miniaturas col-12">
            <img className="miniatura"  src={miniatura5}/>
            </div>
          </div>
          <div className="wrapper-principal col-10">
            <img className="foto-principal" src={imagenCanchas}></img>
          </div>
        </div>
        <div className="wrapper-descripcion col-12">
          <h2>Descripción</h2>
          <p>
            Alquiler de cancha de futbol y paddle techadas en un predio de 866
            m2 totales. Muy buen estado, poseen protecciones perimetrales y de
            seguridad, con red superior y de altura. Iluminacion en todo el
            interior. Techo de tinglado. Cocina completa y deposito con
            estanterias y quincho con parrilla Dos amplios baños y vestuarios.
            Venta minorista de Kiosco y comidas. Alquier del Salon/cancha para
            eventos y cumpleaños- Alquiler de parrilla
          </p>
        </div>
      </div>
      <div className="contenedor-der col-4">
        <div className="contenedor-ver col-12">
          <h2>Sportivo Barracas</h2> 
          <div className="wrapper-contador col-12">
             <Contador stock={stock} initial={1}/>
             <p className="cantidad-stock">Stock Disponible {stock} </p>
          </div>
          <button className="addtoCart"><p className="addtoCarttext">Comprar Ahora</p></button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
