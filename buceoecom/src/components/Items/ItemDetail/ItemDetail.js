import React from 'react'
import "./ItemDetail.css"
import ItemCount from '../ItemCount/ItemCount'

function ItemDetail(prodIndividual) {
    console.log(prodIndividual)
    return (
        <div className='cardProdIndividual'>
            <div className='cardProdIndividualImg'>
                <img className='cardImg2' src={prodIndividual.prodIndividual.imagen} alt={prodIndividual.prodIndividual.titulo} />
            </div>
            <div className='carProdIndividualContent'>
                <h1>{prodIndividual.prodIndividual.titulo}</h1>
                <h2>{prodIndividual.prodIndividual.desc}</h2>
                <h3>${prodIndividual.prodIndividual.precio}</h3>
                <ItemCount
                    contadorInicial={prodIndividual.prodIndividual.inicial}
                    contadorStock={prodIndividual.prodIndividual.stock}
                    contadorMinimo={prodIndividual.prodIndividual.minimo} />
            </div>
        </div>
    )
}

export default ItemDetail
