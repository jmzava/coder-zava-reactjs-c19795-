import React from 'react'
import "./ItemDetail.css"
import ItemCount from '../ItemCount/ItemCount'

function ItemDetail({ prodIndividual }) {
    const { imagen, titulo, desc, precio, inicial, stock, minimo, categoria} = prodIndividual
    return (
        <div className='cardProdIndividual'>
            <div className='cardProdIndividualImg'>
                <img className='cardImg2' src={imagen} alt={titulo} />
            </div>
            <div className='carProdIndividualContent'>
                <h1>{titulo}</h1>
                <h2>{desc}</h2>
                <h3>${precio}</h3>
                <ItemCount
                    contadorInicial={inicial}
                    contadorStock={stock}
                    contadorMinimo={minimo} />
            </div>
        </div>
    )
}

export default ItemDetail
