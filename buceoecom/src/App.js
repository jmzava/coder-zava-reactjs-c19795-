import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Items/ItemListContainer/ItemListContainer';
import Pagina from './components/Structure/Pagina/Pagina'
function App() {
  return (
    <div className="buceoecom">
      <NavBar />
      <Pagina greeting='Accesorios para tu Buceo'/>
      <ItemListContainer  />
      
    </div>
  );
}

export default App;
