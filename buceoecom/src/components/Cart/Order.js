import React,{useEffect, useState} from 'react';
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { useCartContext } from '../../context/cartContext';
import CargandoSpinner from '../Structure/Spinners/Spinner';



function Order() {

console.log("estoy aca")
const [cargando, setCargando] = useState(true);
//     const {cartLista, sumaCarrito}= useCartContext()
//     const sumaCart=sumaCarrito()
//     console.log(datosForm)
//     useEffect(() => {
//       async function grabarOrden(){
//         let orderID = ""  
//         let ordenCompra = {}
//         ordenCompra.comprador = datosForm
//         ordenCompra.total = sumaCart
//         ordenCompra.items = cartLista.map(itemCarrito => {
//                 const itemID = itemCarrito.id;
//                 const itemTitle = itemCarrito.titulo;
//                 const itemPrecio = itemCarrito.precio;
//                 const itemQty = itemCarrito.qty;
//                 const itemTotal = itemCarrito.precio * itemCarrito.qty;
//             return {itemID,itemTitle,itemPrecio,itemQty,itemTotal}
//             })
//         console.log("entre en el use")
//             // para grabar la orden a firestore !!!! descomentar 
    
//             // const database = getFirestore()
//             // const databaseOrden = collection(database, 'Ordenes')
//             // await addDoc(databaseOrden, ordenCompra)
//             // .then(resp => orderID=resp.id)
//             // .catch(err => console.log(err))
//             // .finally(() =>setCargando(false))
    
//         }
//     grabarOrden()
// }, []);
    


   return(
    <div>

    </div>
  );
}



export default Order;
