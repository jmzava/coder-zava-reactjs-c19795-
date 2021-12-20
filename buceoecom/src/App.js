import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="buceoecom">
      <NavBar />
      <ItemListContainer greeting='Aqui encontraras los mejores productos para el Buceo' />
    </div>
  );
}

export default App;
