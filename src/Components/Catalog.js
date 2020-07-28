import React from "react";
import { Link } from 'react-router-dom'
import rows from "./rows";
import CatalogItem from "./CatalogItem";


class Catalog extends React.Component{
    constructor() {
        super();
        this.state = {};
    }

    render(){
        const catalogList = rows.map(item =>
            <CatalogItem
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                vendor={item.vendor}
                pack={item.pack}
                img={item.img}
            />);

        return(

            <div className="catalog-wrapper">
                {catalogList}
            </div>
        );
    }
}

export default Catalog;