import Home from './views/Home/Home';
import Formacion from './views/Formacion/Formacion';
import Contacto from './views/Contacto/Contacto';
import Experiencia from './views/Experiencia/Experiencia';
import Tutoriales from './views/Tutoriales/Tutoriales';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/formacion" element={<Formacion/>} />
        <Route path="/contacto" element={<Contacto/>} />
        <Route path="/experiencia" element={<Experiencia/>} />
        <Route path="/tutoriales" element={<Tutoriales/>} />
      </Routes>
    </Router>
  );
}

export default App;
