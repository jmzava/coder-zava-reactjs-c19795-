import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";
import {Row} from "react-bootstrap";

function ItemList({ productos }) {
  return (
    <div>
      <Row className="g-4 ustify-content-md-center rounded">
        {productos.map((producto) => (
          <Item key={producto.id} producto={producto} />
        ))}
      </Row>

    </div>
  );
}

export default ItemList;
