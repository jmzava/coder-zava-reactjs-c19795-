import { collection, doc, getDoc, getFirestore} from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import Logo from "../Structure/Images/logo/scuba.png";
import './ChekOut.css'
import { useParams } from "react-router-dom";

import OrderItem from './OrderItem'


function Order() {

  const [detalleOrden,setDetalleOrden]=useState()
  const [ordenShow,setOrdenShow]=useState(false)

  const {idOrden} = useParams()

  const idCompra=idOrden
  
  // eslint-disable-next-line
  useEffect(() => {consultarOrden()},[])


async function consultarOrden(){
  const baseOrdenConexion= getFirestore()
  const baseOrdenFacturada= collection(baseOrdenConexion, 'Ordenes')
  const docOrdenFacturada = doc(baseOrdenFacturada, idCompra)
  await getDoc(docOrdenFacturada)
        .then(resp => setDetalleOrden(resp.data()))
        .catch(err => console.log(err))
        .finally(()=> setOrdenShow(true))
        }


   return(
    <div>
          <div className="rowCheckOut">
              <div className="col-75-CK">
                  <div className="containerCheckOut">
                      <h3>Su Orden de Compra ha sido procesada, su ID es : {idCompra} </h3>
                      <div className="ordenGlobal">
                                    <div className="ordenCabecera">
                                          <div className="ordenCelda">Producto</div>
                                          <div className="ordenCelda"> </div>
                                          <div className="ordenCelda">Precio</div>
                                          <div className="ordenCelda">Cantidad</div>
                                          <div className="ordenCelda">Subtotal</div>
                                    </div>
                                    <div className="ordenBody">

                                          {ordenShow? detalleOrden.items.map(ordenDetalle =>(<OrderItem key={ordenDetalle.id} ordenDetalle={ordenDetalle} />)):""}
                                    </div>
                                    <div className="ordenPie">
                                          <div className="ordenCelda"></div>
                                          <div className="ordenCelda"></div>
                                          <div className="ordenCelda"></div>
                                          <div className="ordenCelda">Total</div>
                                          <div className="ordenCelda">${ordenShow?detalleOrden.total: "" }</div>
                                    </div>
                              </div>
                  </div>
              </div>
              <div className="col-25-CK ">
                  <div className="containerCheckOut">
                      <img className="logoOrder" src={Logo} alt="Logo Buceo"/>
                      <h3>Gracias Por su Compra</h3>
                  </div>
              </div>
          </div>
    <br/>
    <br/>
    <br/>
    <br/>
    </div>
  );
}



export default Order;
