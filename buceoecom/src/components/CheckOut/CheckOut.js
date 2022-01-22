import React from 'react';
import {Form, Row, Col, Button} from 'react-bootstrap'
import { useCartContext } from '../../context/cartContext';
import {FaShoppingCart} from "react-icons/fa"
import { Link } from "react-router-dom";
import './ChekOut.css'



function CheckOut() {
    const {cartLista, globoCarrito, sumaCarrito}= useCartContext()

    const cartResumeCant = globoCarrito()
    const sumaCart=sumaCarrito()

return <>
   <div className="rowCheckOut">
            <div className="col-75-CK">
                <div className="containerCheckOut">
                        <Form>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control placeholder="Nombre" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridApellido">
                                <Form.Label>Apellido</Form.Label>
                                <Form.Control placeholder="Apellido" />
                                </Form.Group>                                
                                
                                <Form.Group as={Col} controlId="formGridCorreo">
                                <Form.Label>Correo Electronico</Form.Label>
                                <Form.Control type="email" placeholder="correo@sucorreo.com" />
                                </Form.Group>
                                
                            </Row>

                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Direccion</Form.Label>
                                <Form.Control placeholder="Avenida Siempre Viva 742" />
                            </Form.Group>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridCiudad">
                                    <Form.Label>Ciudad</Form.Label>
                                    <Form.Control />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZipCode">
                                     <Form.Label>Codigo Postal</Form.Label>
                                     <Form.Control />
                                </Form.Group>

                            <Form.Group as={Col} controlId="formGridTelefono">
                            <Form.Label>Telefono</Form.Label>
                            <Form.Control />
                            </Form.Group>
                        </Row>

                    <Button className='cartBotonComprar'>Comprar</Button>
                    <br/>
                    <br/>
                    </Form>
</div>
            </div>
            <div className="col-25-CK ">
                 <div className="containerCheckOut">
                        <h4>Carrito <span className="price" ><FaShoppingCart/> <b>{cartResumeCant}</b></span></h4>
                                {cartLista.map(productosCart => 
                                    <>
                                    <div key={productosCart.id}>{productosCart.titulo} x {productosCart.qty}u<span className="price">${productosCart.qty*productosCart.precio}</span></div>
                                    <br/>
                                    </>)}
                        <br/>
                        <p>Total de la Compra<span className="priceTotal" ><b>${sumaCart}</b></span></p>
                        <Link to="/cart">
                                          <button className="cartBotonModificar">Modificar</button>
                        </Link>
                        <br/>
                    </div>
                </div>
</div>
  </>;
}

export default CheckOut;
