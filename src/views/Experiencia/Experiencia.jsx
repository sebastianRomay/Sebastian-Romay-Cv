// Dependencias
import React, {useState, useEffect} from "react";

// Componentes
import Navbar from '../../components/Navbar/Navbar';
import DescripcionTrabajo from '../../components/DescripcionTrabajo/DescripcionTrabajo';
import Footer from '../../components/Footer/Footer';

const Experiencia = () => {

  return (
    <>
      <Navbar />
      <div className="container mt-5 mb-3">
        <div className="row">
          <div className="col"> 
            <DescripcionTrabajo />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Experiencia