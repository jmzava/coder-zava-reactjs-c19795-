import React from 'react'
import { useCartContext } from '../../../context/cartContext';
import "./Cart.css"

function CartItem({productos}) {
const{removeItemCarrito}=useCartContext()
    const { id, imagen, titulo, desc, precio, qty } =productos;

    return (       
        <div className="cartItemDetails">
                  <div className="cartCelda">
                        <img className="cartItemImagen" src={imagen} alt={titulo} />
                  </div>
                  <div className="cartCelda">{desc}</div>
                  <div className="cartCelda">${precio}</div>
                  <div className="cartCelda">{qty}</div>
                  <div className="cartCelda">${qty*precio}
                     <span className="cartRemoverItemSpan"> 
                     <button className="cartBotonRemover" onClick={()=>removeItemCarrito(id)}>Remover</button>
                     </span>
                </div>
        </div>
    );
}

export default CartItem



