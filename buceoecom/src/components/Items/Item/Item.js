import React from "react";
import { Button, Card, Col} from "react-bootstrap";
import "./Item.css";

function Item({ producto }) {
  return (
    <Col>
    <Card className="cardStyle">
      <div className="centerThings">
       <Card.Img className="cardImg" variant="top" src={producto.imagen} alt={producto.titulo}/>
      </div>
      <Card.Body>
        <Card.Title className="cardTitle">{`${producto.titulo}`}</Card.Title>
        <Card.Text className="cardText">{`${producto.desc}`}</Card.Text>
        <Button className="cardBoton"> Detalles</Button>
      </Card.Body>

    </Card>
    </Col>
  );
}

export default Item;
