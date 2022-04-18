import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navegacion/Navbar'
import Inicio from './components/paginas/Inicio'
import Pokemon from './components/paginas/Pokemon'
import PokeInfo from './components/paginas/PokeInfo'



function App() {

  return (

    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="/pokeinfo:id" element={<PokeInfo />} />
      </Routes>

    </BrowserRouter>
 
  );
}

export default App;
