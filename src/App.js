// Dependencias
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Componentes
import Home from './views/Home/Home';
import Formacion from './views/Formacion/Formacion';
import Contacto from './views/Contacto/Contacto';
import Experiencia from './views/Experiencia/Experiencia';
import Tutoriales from './views/Tutoriales/Tutoriales';
import Proyectos from './views/Proyectos/Proyectos';
import DetalleTutorial from './views/DetalleTutorial/DetalleTutorial';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/formacion" element={<Formacion/>} />
        <Route path="/contacto" element={<Contacto/>} />
        <Route path="/experiencia" element={<Experiencia/>} />
        <Route path="/tutoriales" element={<Tutoriales/>} />
        <Route path="/proyectos" element={<Proyectos/>} />
        <Route path="/tutoriales/:id/:titulo" element={<DetalleTutorial/>} />
      </Routes>
    </Router>
  );
}

export default App;
