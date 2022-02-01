import { useEffect, useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

import { useCartContext } from '../../context/cartContext';
import { useOrdenContext } from '../../context/orderContext';
import './ChekOut.css';

function CheckOut() {

    const {cartLista, globoCarrito, sumaCarrito}= useCartContext()
    const {agregarOrden} =useOrdenContext()
    const cartResumeCant = globoCarrito()
    const sumaCart=sumaCarrito()
    const [valido, setValido]=useState(false)
    const [procesarLaOrden, setProcesarLaOrden]=useState(false)
 
    const [datosForm, setDatosForm] = useState({
        nombre:'',
        apellido: '',
        email:'',
        direccion:'',
        ciudad:'',
        cp:'',
        telefono:''
    });

    let navegar=useNavigate();
  
    useEffect(() => {
        if(procesarLaOrden){
            agregarOrden(datosForm)
            navegar("/cart/ProcessOrder")
            }
    })

    function handleChange(e){
        setDatosForm({
                ...datosForm,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }else{
            event.preventDefault();
            event.stopPropagation();
            setProcesarLaOrden(true)
        }
            setValido(true);
       

      };

return <>
   <div className="rowCheckOut">
            <div className="col-75-CK">
                <div className="containerCheckOut">
                
                <Form noValidate validated={valido} onSubmit={handleSubmit}>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Nombre</Form.Label>
                                <input className= "form-control" placeholder="Nombre" name='nombre'  onChange={handleChange} value={datosForm.nombre} required/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridApellido">
                                <Form.Label>Apellido</Form.Label>
                                <input className= "form-control" placeholder="Apellido" name='apellido' onChange={handleChange} value={datosForm.apellido}required/>
                                </Form.Group>                                
                                
                                <Form.Group as={Col} controlId="formGridCorreo">
                                <Form.Label>Correo Electrónico</Form.Label>
                                <input className= "form-control" type="email" placeholder="correo@sucorreo.com" name='email' onChange={handleChange} value={datosForm.email}required/>
                                </Form.Group>
                                
                            </Row>

                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Dirección</Form.Label>
                                <input className= "form-control prevent-validation" placeholder="Avenida Siempre Viva 742" name='direccion' onChange={handleChange} value={datosForm.direccion}/>
                           </Form.Group>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridCiudad">
                                    <Form.Label>Ciudad</Form.Label>
                                    <input className= "form-control prevent-validation" placeholder="Ciudad" name='ciudad' onChange={handleChange} value={datosForm.ciudad}/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZipCode">
                                     <Form.Label>Codigo Postal</Form.Label>
                                     <input className= "form-control prevent-validation" placeholder="Codigo Postal" name='cp' onChange={handleChange} value={datosForm.cp}/>
                                </Form.Group>

                            <Form.Group as={Col} controlId="formGridTelefono">
                            <Form.Label>Teléfono</Form.Label>
                            <input className= "form-control prevent-validation" placeholder="Telefono" name='telefono' onChange={handleChange} value={datosForm.telefono}/>
                            </Form.Group>
                        </Row>
                        <Button type="submit" className='button cartBotonComprar'>Comprar</Button>
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
