import Home from './views/Home/Home';
import SobreMi from './views/SobreMi/SobreMi';
import Contacto from './views/Contacto/Contacto';
import Experiencia from './views/Experiencia/Experiencia';
import Blog from './views/Blog/Blog';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sobremi" element={<SobreMi/>} />
        <Route path="/contacto" element={<Contacto/>} />
        <Route path="/experiencia" element={<Experiencia/>} />
        <Route path="/blog" element={<Blog/>} />
      </Routes>
    </Router>
  );
}

export default App;
