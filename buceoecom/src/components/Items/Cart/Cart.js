import React from "react";
import Logo from "../../Structure/Images/logo/scuba.png";
import "./Cart.css"
import { useNavigate } from "react-router-dom";


function Cart() {
    const navigate = useNavigate();
  return (
    <div>
      <section className="proxCart">
        <div className="proxCartContenido">
          <img className="proxCartImagen" src={Logo} alt="Logo Buceo"/>
          <div className="proxCartCard">
            <h1>Proximamente Aqui vera su Compra</h1>
            <button className="btnItemDetail btnCardItemDetail" onClick={()=>navigate(-1)}>Volver</button>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Cart;
