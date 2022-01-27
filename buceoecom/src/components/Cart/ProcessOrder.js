import React from 'react';
import { useOrderContext } from '../../context/orderContext';
import Cart from './Cart';

function ProcessOrder({}) {

const {ordenCompra} =useOrderContext()

const datosOrden = ordenCompra

console.log(datosOrden)

  return <div>
              
    {/* {cargando ? (
        <h2 className="centerText">
            
          Procesando Orden
          <CargandoSpinner />
        </h2>
      ) : (
        <Cart />
      )} */}

      
  </div>;
}

export default ProcessOrder;
