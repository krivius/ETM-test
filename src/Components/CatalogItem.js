import React from "react";
import { Link } from 'react-router-dom'

function CatalogItem(props) {
    return(
        <div className="catalog-item">
            <h4>{props.title}</h4>
            <div className="image">
                <img src={'/img/'+props.img}/>
            </div>
            <h4 className="vendor">{props.vendor}</h4>
            <Link to={'/catalog/'+props.id}>Подробнее</Link>
        </div>
    );
}

export default CatalogItem;