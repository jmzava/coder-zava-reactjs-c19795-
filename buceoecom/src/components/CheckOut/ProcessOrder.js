import React, { useEffect, useState} from 'react';
import { collection, getFirestore, addDoc, query, where, documentId, writeBatch, getDocs } from "firebase/firestore";
import { useCartContext } from '../../context/cartContext';
import { useOrderContext } from '../../context/orderContext';
import CargandoSpinner from '../Structure/Spinners/Spinner';
import Logo from "../Structure/Images/logo/scuba.png";
import { Link, Navigate} from "react-router-dom";



function ProcessOrder() {
    const {ordenCompra} =useOrderContext()
    const {cartLista, sumaCarrito, vaciarCarrito}= useCartContext() 
    const [procesandoOrden, setProcesandoOrden] = useState(true)
    const [ordenID, setOrdenID] =useState("")
    const datosOrden = ordenCompra
    const sumaCart=sumaCarrito()
    
    async function grabarOrden(){
 
      let ordenDeCompra = {}
      ordenDeCompra.comprador = datosOrden
      ordenDeCompra.total = sumaCart
      ordenDeCompra.items = cartLista.map(itemCarrito => {
              const itemID = itemCarrito.id;
              const itemTitle = itemCarrito.desc;
              const itemPrecio = itemCarrito.precio;
              const itemQty = itemCarrito.qty;
              const itemImg = itemCarrito.imagen;
              const itemTotal = itemCarrito.precio * itemCarrito.qty;
          return {itemID,itemTitle,itemPrecio,itemQty,itemTotal,itemImg}
          })

          const database = getFirestore()
          const databaseOrden = collection(database, 'Ordenes')
          await addDoc(databaseOrden, ordenDeCompra)
          .then(resp => setOrdenID(resp.id))
          .catch(err => console.log(err))
          .finally(()=> console.log(ordenID))
          
          const actualizarStock = collection(database, "Productos")
          const consultaStock = query( actualizarStock, where( documentId() , 'in', cartLista.map(it => it.id))) 

          const procesoActualizarStock = writeBatch(database)
          await getDocs(consultaStock)
          .then(resp => resp.docs.forEach(res => procesoActualizarStock.update(res.ref, {stock: res.data().stock - cartLista.find(item => item.id === res.id).qty})))
          .catch(err => console.log(err))
          .finally(()=> setProcesandoOrden(false))
          procesoActualizarStock.commit()

          vaciarCarrito()    
    }
     
    useEffect(() => {
      if (cartLista.length!==0){
                  grabarOrden()
                }},[cartLista]);

    if (cartLista.length!==0){

      return(
       <div>
            {procesandoOrden ? (
             <h2>
            Procesando Orden 
            <CargandoSpinner/>
          </h2>
        ) : (
          <>
          <Navigate to= {`/cart/Order/${ordenID}`} />
          </>
       )
   }
       </div>
  )
}

return(
<div>
      <section className="proxCart">
            <div className="proxCartContenido">
                  <img className="proxCartImagen" src={Logo} alt="Logo Buceo"/>
                  <div className="proxCartCard">
                        <h1>Su carrito esta Vacio</h1>
                        <Link to="/productos">
                              <button className="btnItemDetail btnCardItemDetail"  >ir A Comprar</button>
                        </Link>
                  </div>
            </div>
      </section>
</div>
);
}
export default ProcessOrder;
