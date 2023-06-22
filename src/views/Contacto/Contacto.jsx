// Dependencias
import React from "react";

// Componentes
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Formulario from "../../components/Formulario/Formulario";

// Estilos
import "./Contacto.css";

const Contacto = () => {
  return (
    <>
      <Navbar />
      <h1 className="title text-center mt-5">Contactame</h1>
      <div className="container h-70 align-items-center d-flex justify-content-center">
        <Formulario />
      </div>
      <Footer />
    </>
  )
}

export default Contacto