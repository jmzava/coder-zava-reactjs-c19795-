import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div className="buceoecom">
      <NavBar />
      <ItemListContainer greeting='Aqui encontraras los mejores productos para el Buceo' />
      <ItemCount contadorInicial={0} contadorStock={10} contadorMinimo={0}/>
    </div>
  );
}

export default App;
