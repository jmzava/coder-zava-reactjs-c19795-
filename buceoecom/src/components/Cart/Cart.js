import React from "react";
import "./Cart.css"
import Logo from "../Structure/Images/logo/scuba.png";
import { Link} from "react-router-dom";
import CartItem from "./CartItem";
import { useCartContext } from "../../context/cartContext";

function Cart() {
    const {cartLista, vaciarCarrito, sumaCarrito} = useCartContext()
    const sumaCart=sumaCarrito()

    if (cartLista.length!==0){
      return (
            <>
            <div className="rowCart">
                  <div className="col-75-Cart">
                        <div className="containerCart">
                               <div className="cartGlobal">
                                    <div className="cartCabecera">
                                          <div className="cartCelda">Producto</div>
                                          <div className="cartCelda"> </div>
                                          <div className="cartCelda">Precio</div>
                                          <div className="cartCelda">Cantidad</div>
                                          <div className="cartCelda">Subtotal</div>
                                    </div>
                                    <div className="cartBody">
                                          {cartLista.map(productos =>(<CartItem key={productos.id} productos={productos} />))}
                                    </div>
                              </div>
                        </div>
                  </div>
                  <div className="col-25-Cart">
                        <div className="containerCart">
                                    <br/>
                                    <p className="textTotalCart" >Total de la Compra </p><span className="priceTotalCart">${sumaCart}</span>
                                    <button className=" cartBotonComandos" onClick={vaciarCarrito}>Vaciar Carrito</button>
                                    <br/>
                                    <Link to="/cart/CheckOut">
                                          <button className=" cartBotonComandos">CheckOut</button>
                                    </Link>
                                    <br/>
                                    <Link to="/productos">
                                    <button className=" cartBotonComandos">Seguir Comprando</button>
                                    </Link>
                        </div>
                  </div>
             </div>
            <br/>
            <br/>

            </>
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