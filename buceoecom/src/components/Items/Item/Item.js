import React from "react";
import { Button, Card, Col} from "react-bootstrap";
import "./Item.css";
import ItemCount from "../ItemCount/ItemCount";

function Item({ producto }) {
  return (
    <Col>
    <Card className="cardStyle">
      <div className="centerThings">
       <Card.Img className="cardImg" variant="top" src={producto.imagen} />
      </div>
      <Card.Body>
        <Card.Title className="cardTitle">{`${producto.titulo}`}</Card.Title>
        <Card.Text className="cardText">{`${producto.desc}`}</Card.Text>
        <Button className="cardBoton"> Detalles</Button>
      </Card.Body>
      <Card.Footer className="centerThings footerClass">
      <ItemCount
          contadorInicial={producto.inicial}
          contadorStock={producto.stock}
          contadorMinimo={producto.minimo}
        />
      </Card.Footer>
    </Card>
    </Col>
  );
}

export default Item;
