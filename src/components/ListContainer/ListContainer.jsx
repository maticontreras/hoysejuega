import React, { useState , useEffect } from "react";
import './listcontainer.css'
import Card from '../card/Card'
import imagenCancha from "../../assets/images/cancha-futbol.jpeg";


const ListContainer = () => {
  const data = [
    {
      id: 1,
      name: "Sportivo Barracas",
      img: imagenCancha,
      stock: "19",
      direccion: "Padre carlos Mujica 199 , Capital Federal",
    },
    {
      id: 2,
      name: "Pressing",
      img: imagenCancha,
      stock: "4",
      direccion: "Julio Argentino Noble 4100 , Capital Federal",
    },
    {
      id: 3,
      name: "Campus",
      img: imagenCancha,
      stock: "5",
      direccion: "Padre carlos Mujica 199 , Capital Federal",
    },
  ];

const [canchas, setCanchas] = useState(null);
  
useEffect(() => {
  const cargarCanchas = new Promise ((resolve, reject) =>{
    setTimeout(() => {
      resolve(data);
    },2000);
}); 

cargarCanchas
  .then((result) => {
    setCanchas(result);
  })
  .catch((err) => {
    console.log(err)
  });

},[]);

  return (
    <div className="main-container">
        <Card products={canchas}/>    
      </div>  
  );
};

export default ListContainer;
