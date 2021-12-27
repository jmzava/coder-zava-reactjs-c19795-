import React, { useState } from "react";
// import { Prev } from "react-bootstrap/esm/PageItem";

function ItemCount({ contadorInicial, contadorStock, contadorMinimo }) {
  const [contador, mueveContador] = useState(contadorInicial);

  const sumaContador = () => {
    contador < contadorStock
      ? mueveContador(contadorprevio => contadorprevio + 1)
      : alert("stock maximo alcanzado");
  };

  const restaContador = () => {
    contador > contadorMinimo &&
      mueveContador(contadorprevio => contadorprevio - 1);
  };
  return (
    <div className="counter">
      <h1> {contador} </h1> <button onClick={sumaContador}> + </button>{" "}
      <button onClick={restaContador}> - </button>
    </div>
  );
}

export default ItemCount;
