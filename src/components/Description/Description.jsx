import React from 'react'
import './description.css'
import {Link} from 'react-router-dom'

const Description = ({item}) => {
    return (
        <div className="descriptionButton"> 
            <Link to={`/productos/${item}`} className="addText" >
                <span>Ver descripción</span>
            </Link>
        </div>
    );

};

export default Description;
