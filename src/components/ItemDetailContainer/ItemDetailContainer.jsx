import React, { useState , useEffect } from "react";
import ItemDetail from '../ItemDetail/ItemDetail'
import miniatura1 from "../../assets/images/thumbnail1.jpeg";
import miniatura2 from "../../assets/images/thumbnail2.jpeg";
import miniatura3 from "../../assets/images/thumbnail3.jpeg";
import miniatura4 from "../../assets/images/thumbnail4.jpeg";
import miniatura5 from "../../assets/images/thumbnail5.jpeg";
import miniaturab1 from "../../assets/images/foto01-madero.jpeg";
import miniaturab2 from "../../assets/images/foto02-madero.jpeg";
import miniaturab3 from "../../assets/images/foto03-madero.jpeg";
import miniaturab4 from "../../assets/images/foto04-madero.jpeg";
import miniaturab5 from "../../assets/images/foto05-madero.jpeg";
import miniaturac1 from "../../assets/images/fot01-elpredio.jpeg";
import miniaturac2 from "../../assets/images/fot02-elpredio.jpeg";
import miniaturac3 from "../../assets/images/fot03-elpredio.jpeg";
import miniaturac4 from "../../assets/images/fot04-elpredio.jpeg";
import miniaturac5 from "../../assets/images/fot05-elpredio.jpeg";

const ItemDetailContainer = () => {
  const detailData = [
    {
      id: 1,
      name: "Sportivo Barracas",
      stock: "3",
      descripcion: "Alquiler de cancha de futbol y paddle techadas en un predio de 866 m2 totales. Muy buen estado, poseen protecciones perimetrales y deseguridad, con red superior y de altura. Iluminacion en todo el interior. Techo de tinglado. Cocina completa y deposito con estanterias y quincho con parrilla Dos amplios baños y vestuarios.Venta minorista de Kiosco y comidas. Alquier del Salon/cancha para eventos y cumpleaños- Alquiler de parrilla",
      stock: 10,
      img: miniatura1,
      miniatura1: miniatura1,
      miniatura2: miniatura2,
      miniatura3: miniatura3,
      miniatura4: miniatura4,
      miniatura5: miniatura5,
      precio: "$2500",
    },
    {
      id: 2,
      name: "El Predio",
      stock: 4,
      direccion: "Julio Argentino Noble 4100 , Capital Federal",
      img: miniaturab1,
      miniatura1: miniaturab1,
      miniatura2: miniaturab2,
      miniatura3: miniaturab3,
      miniatura4: miniaturab4,
      miniatura5: miniaturab5,
      precio: "$3750",
    },
    {
      id: 3,
      name: "Futbol Madero",
      stock: 5,
      direccion: "Padre carlos Mujica 199 , Capital Federal",
      img: miniaturac1,
      miniatura1: miniaturac1,
      miniatura2: miniaturac2,
      miniatura3: miniaturac3,
      miniatura4: miniaturac4,
      miniatura5: miniaturac5,
      precio: "$2150",
    },
  ];

const [detail, setDetail] = useState([]);


useEffect(() => {
    const cargarDetail = new Promise((resolve, reject) => {
        resolve(detailData);
    });

    cargarDetail
      .then((result) => {
        setDetail(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(detail)
  return (
    <> 
      {detail && <ItemDetail details={detail}/>}
    </>
  );
};

export default ItemDetailContainer;
