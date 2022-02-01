
# ***# Comisión ReactJS 19795***

## E-Commerce para proyecto final CoderHouse.

Se genera una app enteramente en react js que permite navegar las distintas categorías y un listado general para poder seleccionar los ítems para agregar el carrito. Luego se puede generar la compra con un formulario y un cart que permite sus modificaciones , vaciado y cambios de cantidades. 

La orden será grabada en firebase y se muestra un resumen luego de la compra consultando nuevamente a la base de firebase. 

Los productos estan almacenados en firebase 

# Instalación

Clonar el repositorio **https://github.com/jmzava/coder-zava-reactjs-c19795-.git**

Instalar la aplicación mediante **"npm install react-app"** 

Iniciarla con **"npm start"**. 


Se abrira el navegador  **http://localhost:3000** para su visualización.

# Dependencias

* react version 17.0.2
* react-bootstrap version 2.0.3
* react-dom version 17.0.2
* react-icons version 4.3.1
* react-router-dom version 6.2.1
* react-scripts version 4.0.3
* bootstrap version 5.1.3
* firebase version 9.6.3



# Descripción del proyecto
- El archivo App contiene las rutas del e-commerce y los contextos creados.
- La carpeta components contiene los componentes utilizados para los items de la app.

# Uso de la app

- Ingresando a la pagina web, dentro de la seccion tienda , el usuario podra ver todos los productos disponibles. 
- Clickeando en ver detalle, podra ingresar la cantidad de productos que quiere, o volver a la pagina de inicio para solicitar otro producto.
- Cada producto agregado se ve en el carrito, al que se accede haciendo click en el icono del mismo (arriba a la derecha.)
- Para realizar la compra, debe ingresar al carrito, clickar en checkout , y completar el formulario con sus datos.
- Desde allí se recibira la orden de compra en la base de firebase y se mostrsara la misma en una pantalla final 

# Demo on Line

https://musing-mirzakhani-03907d.netlify.app/



