// Dependencias
import React, {useState, useEffect} from "react";

// Componentes
import Navbar from "../../components/Navbar/Navbar";
import Avatar from "../../components/Avatar/Avatar";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/Loader/Loader";

// Estilos
import "./Home.css";

const Home = () => {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 400)
  }, [])

  return (
    loading ? 
    <Loader />
    :
    <>
      <Navbar />
      <div className="container align-items-center d-flex h-80">
        <div className="row align-items-center">
          <div className="col">
            <Avatar />
          </div>
          <div className="col">
            <h1 className="text-center title">Software Engineer</h1>
            <p className="text-color text-center">
              {" "}
              Desarrollador Web Front End - Profesor de Desarrollo Web <br />{" "}
              <br />
              En mi sitio encontraras proyectos en los que he trabajado y podras ver mi experiencia laboral. 
              Además, conoceras más sobre mis habilidades tecnicas y mi perfomance como profesor.
              También puedes encontrar recursos útiles, tutoriales y artículos en el blog relacionados con el desarrollo web.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
