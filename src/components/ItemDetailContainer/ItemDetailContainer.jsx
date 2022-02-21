import React, { useState , useEffect } from "react";
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
  const detailData = [
    {
      id: 1,
      name: "Sportivo Barracas",
      stock: "3",
      descripcion: "descripcion canchas",
    },
    {
      id: 2,
      name: "Pressing",
      stock: "4",
      direccion: "Julio Argentino Noble 4100 , Capital Federal",
    },
    {
      id: 3,
      name: "Campus",
      stock: "5",
      direccion: "Padre carlos Mujica 199 , Capital Federal",
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
      detail && <ItemDetail details={detail}/>
    </>
  );
};

export default ItemDetailContainer;
