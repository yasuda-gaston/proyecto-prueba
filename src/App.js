import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './container/ItemListContainer';

function App({ greeting }) {
  return (
    <div className="App">

      <NavBar />
      <ItemListContainer greeting={'Bienvenidos a Wakaba Soccer Shop'} />


    </div>
  );
}

export default App;
