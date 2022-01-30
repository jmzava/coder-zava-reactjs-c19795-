import React from 'react'
import {Spinner} from 'react-bootstrap'
import Logo from "../Images/logo/scuba.png"
import "./Spinner.css"

function CargandoSpinner(props) {
    
    let texto = props.mensaje
   
    return (
        <div>
        <section className="spinnerPrincipal">
              <div className="spinnerContenido">
                    <img className="spinnerImagen" src={Logo} alt="Logo Buceo"/>
                    <div className="spinnerCard">
                          <h1>{texto}</h1>
                          <Spinner animation="border" variant="light" />
                    </div>
              </div>
        </section>
  </div>
    )
}

export default CargandoSpinner
