import React, { useState } from 'react';
import {Form, Row, Col, Button} from 'react-bootstrap'
import { useCartContext } from '../../context/cartContext';
import {FaShoppingCart} from "react-icons/fa"
import { Link } from "react-router-dom";
import './ChekOut.css'
import { useOrderContext } from '../../context/orderContext';



function CheckOut() {

    const {cartLista, globoCarrito, sumaCarrito}= useCartContext()

    const {agregarOrden} =useOrderContext()

    const cartResumeCant = globoCarrito()

    const sumaCart=sumaCarrito()

    const [datosForm, setDatosForm] = useState({
        nombre:'',
        apellido: '',
        email:'',
        direccion:'',
        ciudad:'',
        cp:'',
        telefono:''
    });

    const ordenProcess =() => {
    agregarOrden(datosForm)
}

function handleChange(e){
    setDatosForm({
            ...datosForm,
        [e.target.name]: e.target.value
    })
}

return <>
   <div className="rowCheckOut">
            <div className="col-75-CK">
                <div className="containerCheckOut">
                        <Form>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Nombre</Form.Label>
                                <input className= "form-control" placeholder="Nombre" name='nombre' onChange={handleChange} value={datosForm.nombre} required/>
                                {/* <Form.Control placeholder="Nombre" /> */}
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridApellido">
                                <Form.Label>Apellido</Form.Label>
                                <input className= "form-control" placeholder="Apellido" name='apellido' onChange={handleChange} value={datosForm.apellido}required/>
                                </Form.Group>                                
                                
                                <Form.Group as={Col} controlId="formGridCorreo">
                                <Form.Label>Correo Electronico</Form.Label>
                                <input className= "form-control" type="email" placeholder="correo@sucorreo.com" name='email' onChange={handleChange} value={datosForm.email}required/>
                                </Form.Group>
                                
                            </Row>

                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Direccion</Form.Label>
                                <input className= "form-control" placeholder="Avenida Siempre Viva 742" name='direccion' onChange={handleChange} value={datosForm.direccion}/>
                           </Form.Group>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridCiudad">
                                    <Form.Label>Ciudad</Form.Label>
                                    <input className= "form-control" placeholder="Ciudad" name='ciudad' onChange={handleChange} value={datosForm.ciudad}/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZipCode">
                                     <Form.Label>Codigo Postal</Form.Label>
                                     <input className= "form-control" placeholder="Codigo Postal" name='cp' onChange={handleChange} value={datosForm.cp}/>
                                </Form.Group>

                            <Form.Group as={Col} controlId="formGridTelefono">
                            <Form.Label>Telefono</Form.Label>
                            <input className= "form-control" placeholder="Telefono" name='telefono' onChange={handleChange} value={datosForm.telefono}/>
                            </Form.Group>
                        </Row>

                     <Link to="/cart/ProcessOrder">
                        <Button className='button cartBotonComprar' onClick={()=>ordenProcess()}>Comprar</Button>
                    </Link> 
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
