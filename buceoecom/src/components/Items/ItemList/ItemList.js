import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";

function ItemList({ productos }) {
  return (
    <div className="principalCards">
          <ul className="listaCards">
          {productos.map((producto) => (<Item key={producto.id} producto={producto} />))}
          </ul>
    </div>
  );
}

export default ItemList;

