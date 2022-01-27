import React from 'react';
import './ChekOut.css'

function OrderItem(ordenDetalle) {
    
    const { itemPrecio , itemTotal, itemImg, itemQty, itemTitle } =ordenDetalle.ordenDetalle;
    console.log()

  return (
                <div className="cartItemDetails">
                <div className="ordenCelda">
                        <img className="cartItemImagen" src={itemImg} alt={itemTitle} />
                </div>
                <div className="ordenCelda">{itemTitle}</div>
                <div className="ordenCelda">${itemPrecio}</div>
                <div className="ordenCelda">{itemQty}</div>
                <div className="ordenCelda">${itemTotal}</div>
                </div>
  )
}

export default OrderItem;
