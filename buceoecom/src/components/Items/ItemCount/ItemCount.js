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

  const resetContador = () =>{
      mueveContador(contadorInicial)
  }

  return (
    <div className="counter">
      <h1 className="contadorText"> {contador}   </h1>
      <button onClick={restaContador}className="botonCard"> - </button>
      <button onClick={resetContador} className="botonCard2"> Reset </button>
      <button onClick={sumaContador} className="botonCard"> + </button>
      <br/>
      <button onClick={()=> {onAdd(contador); resetContador()}} hidden={contador < 1 && "hidden"} className="btnAddCart">Add to Cart</button>
    </div>
  );
}

export default ItemCount;
