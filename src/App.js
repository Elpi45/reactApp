//import logo from './logo.svg';
//import Stock from './components/Stock';
//import Item from "./components/Item";
import './App.scss';
import AppContainer from './components/AppContainer';
import Button from './components/Button';
import {Footer} from './components/Footer';
import Navbar from './components/Navbar';
import Banner from './components/Banner';



function App() {

  

  return (
    <div className="App">

      <Button>Cualquiera</Button>

      <Navbar />

      <Banner promocion = "UNETE AL CLUB Y CONSIGUE UN 15% DE DESCUENTO" boton = "registrate" onClick={() => console.log ("click en registrate")} />

      <main className='content'>

        <AppContainer />
        
      </main>

      <Banner promocion = "UNETE AL CLUB Y CONSIGUE UN 35% DE DESCUENTO" boton = "unete" onClick={() => console.log ("click en unete")} />

      <Footer />
      
    </div>
  );
}

export default App;
