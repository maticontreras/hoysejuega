import React from 'react';
import './navbar.css'
import Logo from '../../assets/logo-editado.svg'
import CartWidget from '../cartwidget/CartWidget';
import { Link } from 'react-router-dom'
{/*import {ReactComponent as ReactLogo} from '../assets/logo-editado.svg';*/}





const Navbar = () => {
    return (
      <div className="navbar">
            <div className="contenedor-logo">
            {/*<ReactLogo/>*/}
            <img className="logo" src={Logo}/>
            </div>
            <div className="contenedor-links">
                <li>
                    <Link className="link-navbar" to={"/"}>Inicio</Link>
                </li>
                <li>
                    <Link className="link-navbar" to={"/productos"}>Productos</Link>
                </li>
                <li>
                    <Link className="link-navbar" to={"/quienes-somos"} >Quienes Somos</Link>
                </li>
                <li>
                    <Link className="link-navbar" to={"/servicios"}>Servicios</Link>
                </li>
                <li>
                    <Link className="link-navbar" to={"/contacto"}>Contacto</Link>
                </li>
            </div>
            <CartWidget/>
       </div> 

  
    );
};


export default Navbar;