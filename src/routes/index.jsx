import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartWidget from '../components/cartwidget/CartWidget';
import Contador from '../components/Contador/Contador';
import ItemDetail from '../components/ItemDetail/ItemDetail';
import ListContainer from '../components/ListContainer/ListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'
import Navbar from '../components/navbar/Navbar'



const Rutas = () => {
    return (
      <BrowserRouter>
      <Navbar/>
        <Routes>    
            <Route path="/" element={<ListContainer/>}/>
            <Route path="/cart"/>
            <Route path="/cart/checkout" />
            <Route path="/description" />
            <Route path="/productos/:id" element={<ItemDetail/>}/>
            <Route path="/categoria/:categoria" element={<ItemDetail/>}/>
        </Routes>
      </BrowserRouter>
    )
}

export default Rutas
                             
   