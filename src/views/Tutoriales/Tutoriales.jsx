// Dependencias
import React, { useState, useEffect } from "react";

// Componentes
import Loader from "../../components/Loader/Loader";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";

// Imagenes
import portadaFavicon from "../../img/favicon.png";

const Tutoriales = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 400);
  }, []);

  // Datos para pasar a la card
  const data = [
    {titulo: "Poner Favicon en tu sitio web",
    fecha: "Junio 23, 2023",
    categoria: "HTML",
    colorCategoria: "#e34c26",
    imagen: portadaFavicon,
  },

    {titulo: "Menu Hamburguesa con CSS",
    fecha: "Junio 21, 2023",
    categoria: "CSS",
    colorCategoria: "#264de4",
    imagen: portadaFavicon},
  ]

  return loading ? (
    <Loader />
  ) : (
    <>
      <Navbar />
      <h1 className="title text-center mt-3 mb-3">Tutoriales</h1>
      <div className="container h-80">
        <div className="row">
            {data.map((item, index) => {
              return (
                <Card data={item} id={index+1}/>
              )
            })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Tutoriales;
