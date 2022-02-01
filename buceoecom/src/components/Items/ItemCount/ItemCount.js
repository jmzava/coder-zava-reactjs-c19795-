import React, { useState } from "react";
import './ItemCount.css'
 
function ItemCount({ contadorInicial, contadorStock, contadorMinimo, onAdd }) {
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

  const reseteaContador = () =>{
      mueveContador(contadorInicial)
  }

  return (
    <div className="counter">
      <h1 className="contadorText"> {contador}   </h1>
      <button onClick={restaContador}className="botonCard"> - </button>
      <button onClick={reseteaContador} className="botonCard2"> Resetear </button>
      <button onClick={sumaContador} className="botonCard"> + </button>
      <br/>
      <button onClick={()=> {onAdd(contador); reseteaContador()}} hidden={contador < 1 && "hidden"} className="btnAddCart">Agregar al Cart</button>
    </div>
  );
}

export default ItemCount;
