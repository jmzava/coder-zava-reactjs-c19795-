import React from "react";
import "./Cart.css"
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../../context/cartContext";
import CartItem from "./CartItem";

function Cart() {
    const navigate = useNavigate();
    const {cartLista, vaciarCarrito} = useCartContext()

  return (
    <div>
      <div className="cartGlobal">
         <br />
         <br />
         <div className="cartBox">
               <div className="cartCabecera">
                     <div className="cartCelda">Producto</div>
                     <div className="cartCelda"></div>
                     <div className="cartCelda">Precio</div>
                     <div className="cartCelda">Cantidad</div>
                     <div className="cartCelda">Subtotal</div>
               </div>
               <div className="cartBody">
                    
                           {cartLista.map(productos =>(<CartItem key={productos.id} productos={productos} />))}

               </div>
               <div className="cartFooter">
               <div className="cartCeldaBotonVolver2">
                     <button className=" cartBotonVolver2" onClick={vaciarCarrito}>Vaciar</button>
               </div>
               <div className="cartCeldaBotonVolver1"></div>

               <div className="cartCeldaBotonVolver2">
                     <button className=" cartBotonVolver2" onClick={()=>navigate(-1)}>Volver</button>
               </div>
               </div>
         </div>
      </div>
    </div>
  );
}

export default Cart;

//  viejo cart

// <section classNameName="proxCart">
// /* <div classNameName="proxCartContenido">
// <img classNameName="proxCartImagen" src={Logo} alt="Logo Buceo"/>
// <div classNameName="proxCartCard">
//   <h1>Proximamente Aqui vera su Compra</h1>
//   <button classNameName="btnItemDetail btnCardItemDetail" onClick={()=>navigate(-1)}>Volver</button>

// </div>
// </div>
// </section> */