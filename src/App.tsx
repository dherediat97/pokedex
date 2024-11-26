import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Pokemon, Pokemons } from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/pokemons/:name" element={<Pokemon />} />
        <Route path="/pokemons" element={<Pokemons />} />
        <Route path="/" element={<Pokemons />} />
      </Routes>
    </Router>
  );
}

export default App;
