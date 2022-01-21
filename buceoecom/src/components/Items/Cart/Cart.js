import React from "react";
import "./Cart.css"
import Logo from "../../Structure/Images/logo/scuba.png";
import { Link, useNavigate } from "react-router-dom";
import { useCartContext } from "../../../context/cartContext";
import CartItem from "./CartItem";
import CheckOut from "../CheckOut/CheckOut";

function Cart() {
    const navigate = useNavigate();
    const {cartLista, vaciarCarrito, sumaCarrito} = useCartContext()
    const sumaCart=sumaCarrito()

    if (cartLista.length!==0){
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
                              <div className="cartCeldaBotonVolver1">
                                    
                                    <button className=" cartBotonVolver2">CheckOut</button>
                              </div>

                              <div className="cartCeldaBotonVolver2">
                                    <button className=" cartBotonVolver2" onClick={()=>navigate(-1)}>Volver</button>
                              </div>
                              <h3 > El total de su compra sera de ${sumaCart}</h3>
                        </div>

                  </div>
                  <br />
                  <br />
                  <br />
                  <br />
                  </div>
            </div>
  );
}
return(
      <div>
            <section className="proxCart">
                  <div className="proxCartContenido">
                        <img className="proxCartImagen" src={Logo} alt="Logo Buceo"/>
                        <div className="proxCartCard">
                              <h1>Su carrito esta Vacio</h1>
                              <Link to="/productos">
                                    <button className="btnItemDetail btnCardItemDetail"  >ir A Comprar</button>
                              </Link>
                        </div>
                  </div>
            </section>
      </div>
  );
}

export default Cart;