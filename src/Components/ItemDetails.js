import React from 'react';
import rows from "./rows";
// import { BrowserRouter, Route, Switch } from 'react-router-dom';


 function ItemDetails({match}) {

    const itemDetails = rows.find(g => g.id === match.params.id);
    return(
        <div className="details-wrapper">
            <h2>{itemDetails.title}</h2>
            <img src={'/img/'+itemDetails.img}/>
            <div className="price"> Цена: {itemDetails.price}</div>
            <div className="pack">Штук в упаковке: {itemDetails.pack} </div>
        </div>
    );
}




export default ItemDetails;