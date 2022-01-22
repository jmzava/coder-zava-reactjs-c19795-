import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from "./components/Structure/NavBar/NavBar";
import ItemListContainer from "./components/Items/ItemListContainer/ItemListContainer";
import Pagina from "./components/Structure/Pagina/Pagina";
import ItemDetailContainer from "./components/Items/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart"
import { CartContextProvider } from "./context/cartContext";
import Footer from "./components/Structure/Footer/Footer"
import CheckOut from "./components/CheckOut/CheckOut";

function App() {
  return (
    <div className="buceoecom fondoPagina">
      <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
            <Route exact path ='/' element={<Pagina greeting="Accesorios para tu Buceo"/>}/>
            <Route exact path ='/productos/:idCategoria' element={<ItemListContainer />}/>
            <Route exact path ='/productos' element={<ItemListContainer />}/>
            <Route exact path ='/item/:idProducto' element={<ItemDetailContainer />}/>
            <Route exact path ='/cart' element={<Cart />}/>
            <Route exact path ='/cart/CheckOut' element={<CheckOut />}/>
        </Routes>
 
      </BrowserRouter>
      
      </CartContextProvider>
      
      <Footer/>
    </div>
  );
}

export default App;
