import React from 'react'
import './Pagina.css'

function Pagina(props) {
    const { greeting } = props;

    return (
        <div className='fondoPagina'>
            <h1 className="centerText">{greeting}</h1>
        </div>
    )
}

export default Pagina
