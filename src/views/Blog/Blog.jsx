// Dependencias
import React, {useState, useEffect} from "react";

import Loader from "../../components/Loader/Loader";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";


const Blog = () => {
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
        <h1 className="title text-center mt-3 mb-3">Articulos y Tutoriales</h1>
        <div className="container h-80">
          <div className="row">
            <div className="col">
              <Card />
            </div>
            </div>
        </div>
      <Footer />
    </>
  )
}

export default Blog