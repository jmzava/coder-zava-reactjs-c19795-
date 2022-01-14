import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from "./components/Structure/NavBar/NavBar";
import ItemListContainer from "./components/Items/ItemListContainer/ItemListContainer";
import Pagina from "./components/Structure/Pagina/Pagina";
import ItemDetailContainer from "./components/Items/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Items/Cart/Cart"
import { cartContext } from "./context/cartContext";

function App() {
  return (
    <div className="buceoecom fondoPagina">
      <cartContext.Provider>
      <BrowserRouter>
        <NavBar />
        <Routes>
            <Route exact path ='/' element={<Pagina greeting="Accesorios para tu Buceo"/>}/>
            <Route exact path ='/categoria/:idCategoria' element={<ItemListContainer />}/>
            <Route exact path ='/item/:idProducto' element={<ItemDetailContainer />}/>
            <Route exact path ='/cart' element={<Cart />}/>
        </Routes>
      </BrowserRouter>
      </cartContext.Provider>
    </div>
  );
}

export default App;
