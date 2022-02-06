import React from 'react';
import './navbar.css'
import Logo from '../../assets/logo-editado.svg'
import CartWidget from '../cartwidget/CartWidget';
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
                    <a className="link" src="#">Inicio</a>
                </li>
                <li>
                    <a className="link" src="#">Productos</a>
                </li>
                <li>
                    <a className="link" src="#">Quienes Somos</a>
                </li>
                <li>
                    <a className="link" src="#">Servicios</a>
                </li>
                <li>
                    <a className="link" src="#">Contacto</a>
                </li>
            </div>
            <CartWidget/>
       </div> 

  
    );
};


export default Navbar;