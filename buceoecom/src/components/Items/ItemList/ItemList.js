import React from "react";
import { memo } from "react";
import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = memo ( ({ productos }) => {
  console.log(productos)  
  return(
          
          <div className="principalCards">
              <ul className="listaCards">
              {productos.map((producto) => (<Item key={producto.id} producto={producto} />))}
              </ul>
         </div>
    )
  } , (viejaProp, nuevaProp)=> viejaProp.productos.length === nuevaProp.productos.length)


export default ItemList;
