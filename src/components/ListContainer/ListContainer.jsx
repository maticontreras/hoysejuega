import React, { useState , useEffect } from "react";
import './listcontainer.css'
import Card from '../card/Card'
import promo1 from "../../assets/images/thumbnail1.jpeg";
import promo2 from "../../assets/images/foto01-madero.jpeg";
import promo3 from "../../assets/images/fot01-elpredio.jpeg";

const ListContainer = () => {
  const data = [
    {
      id: 1,
      name: "Sportivo Barracas",
      img: promo1,
      stock: 10,
      direccion: "Padre carlos Mujica 199 , Capital Federal",
    },
    {
      id: 2,
      name: "El Predio",
      img: promo2,
      stock: 4,
      direccion: "Julio Argentino Noble 4100 , Capital Federal",
    },
    {
      id: 3,
      name: "Futbol Madero",
      img: promo3,
      stock: 5,
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
