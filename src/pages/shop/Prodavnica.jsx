import React from "react";
import {PROIZVODI} from "../../proizvodi";
import { Product } from "./Proizvod";

export const Shop = () => {
    return(
        <div className = "shop">
            <div id = "title" className="shopTitle">
             <h1 className="h1">Weleda shop </h1>
            </div>
            <div className="products">
                {PROIZVODI.map((product)=>(
                <Product data={product}/>))}
            </div>
        </div>
    );
} ;