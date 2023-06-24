// Dependencias
import React, { useState, useEffect } from "react";
import axios from "axios";

// Componentes
import Loader from "../../components/Loader/Loader";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";

// Imagenes
import portadaFavicon from "../../img/favicon.png";

const Tutoriales = () => {
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState([])

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/tutoriales');
      // console.log(response)
      setData(response.data);
    } catch (error) {
      console.log('Error:', error);
    }
  };
  

  return !data ? (
    <Loader />
  ) : (
    <>
      <Navbar />
      <h1 className="title text-center mt-3 mb-3">Tutoriales</h1>
      <div className="container h-80">
        <div className="row gap-4">
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
