import React, { useEffect, useState} from 'react';
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { useCartContext } from '../../context/cartContext';
import { useOrderContext } from '../../context/orderContext';
import CargandoSpinner from '../Structure/Spinners/Spinner';
import Order from './Order';

function ProcessOrder() {
    const {ordenCompra} =useOrderContext()
    const {cartLista, sumaCarrito, vaciarCarrito}= useCartContext() 
    const [procesandoOrden, setProcesandoOrden] = useState(true)
    const [ordenID, setOrdenID] =useState("")
    const datosOrden = ordenCompra
    const sumaCart=sumaCarrito()

    useEffect(() => {

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
                .finally(()=> setProcesandoOrden(false))
                }
        grabarOrden()
        
    }, [datosOrden, sumaCart]);

   return(
       <div>
            {procesandoOrden ? (
             <h2>
            Procesando Orden 
            <CargandoSpinner/>
          </h2>
        ) : (
          
          <Order ordenID={ordenID}/>
       )
   }
       </div>
  )
}

export default ProcessOrder;
