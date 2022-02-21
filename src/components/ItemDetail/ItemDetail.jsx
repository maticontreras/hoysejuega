import React, { useState, useEffect } from "react";
import "./itemDetail.css";
import Contador from "../Contador/Contador";
import imagenCanchas from "../../assets/images/principal.jpeg";
import { useParams } from "react-router-dom";


const ItemDetail = ({details}) => {
  const { id } = useParams();
  return (
    <div className="row">
    {details && details.filter((cancha) => cancha.id == id).map((d) => (
      <>
      <div className="contenedor-img col-8">
        <div className="contenedor-descripcion col-12">
          <div className="wrapper-miniaturas col-md-2">
            <div className="miniaturas col-12">
              <img className="miniatura" src={d.miniatura1}/>
            </div>
            <div className="miniaturas col-12">
            <img className="miniatura"  src={d.miniatura2}/>
            </div>
            <div className="miniaturas col-12">
            <img className="miniatura"  src={d.miniatura3}/>
            </div>
            <div className="miniaturas col-12">
            <img className="miniatura"  src={d.miniatura4}/>
            </div>
            <div className="miniaturas col-12">
            <img className="miniatura"  src={d.miniatura5}/>
            </div>
          </div>
          <div className="wrapper-principal col-10">
            <img className="foto-principal" src={d.img}></img>
          </div>
        </div>
        <div className="wrapper-descripcion col-12">
          <h2>Descripción</h2>
          <p>
            {d.descripcion}
          </p>
        </div>
      </div>
      <div className="contenedor-der col-4">
        <div className="contenedor-ver col-12">
          <h2>Sportivo Barracas</h2>
          <div className="container-precio">
          <h3 className="">{d.precio}</h3>
          </div>
          <div className="wrapper-contador col-12">
             <Contador stock={d.stock} initial={1}/>
             <p className="cantidad-stock">Stock Disponible {d.stock} </p>
          </div>
          <button className="addtoCart"><p className="addtoCarttext">Comprar Ahora</p></button>
        </div>
      </div>
      </> 
    ))}
    </div>
  );
};

export default ItemDetail;
