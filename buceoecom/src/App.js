import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Structure/NavBar/NavBar';
import ItemListContainer from './components/Items/ItemListContainer/ItemListContainer';
import Pagina from './components/Structure/Pagina/Pagina'
import ItemDetailContainer from './components/Items/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="buceoecom">
      <NavBar />
      <Pagina greeting='Accesorios para tu Buceo'/>
      <ItemListContainer  />
      <ItemDetailContainer />

      
    </div>
  );
}

export default App;
