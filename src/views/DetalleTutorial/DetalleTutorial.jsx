// Dependencias
import React, {useState, useEffect} from 'react';
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';

// Componentes
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Avatar from "../../components/Avatar/Avatar";

// Imagenes
import portadaFavicon from "../../img/favicon.png";
import Compartir from "../../img/Iconos/share-svgrepo-com.svg";

// Estilos
import './DetalleTutorial.css';


const DetalleTutorial = () => {

  const { id } = useParams();

  const [data, setData] = useState([])

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/tutoriales/${id}`);
      setData(response.data);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const url = window.location.href;

  return (
    <>  
    <Navbar />
        <div className="container w-60">
          <div className="row mt-3">
            <div className="col">
              <NavLink to='/tutoriales' className='text-decoration-none text-color'><i className="bi bi-arrow-left"></i> Volver</NavLink>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <h1 className="title text-start mb-3 fs-1">{data.titulo}</h1>
              <p className="text-color text-start">{data.fecha}</p>
              <div className='d-flex align-items-end'>
                <Avatar width={'80px'} height={'80px'} border={'2px solid #fff'}/>
                <div className="mx-3">
                <p className='p-0 mb-2 text-color fs-5'>Sebastian Romay</p>
                <a className="bi bi-github fs-6 text-decoration-none " href='https://github.com/sebastianRomay' target='_blank'>  Github</a>
                </div>
              </div>
            </div>
            <div className="col">
              <img src={data.imagen} alt="" width='100%' height='250px' style={{border: '1px solid white'}} />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p className="text-color text-start mt-5">{data.textoPrincipal}</p>
              </div>
            </div>
            <hr />
            <div className="row mt-3">
              <div className="col">
                <h2 className='fs-4 title'>{data.subtitulo}</h2>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col"> 
                <p className='text-color'>{data.textoTutorial}</p>
              </div>
            </div>
            <hr />
            <div className="row mt-3 mb-4">
              <div className="col">
                <h3 className='fs-6 title text-center'>Si te gusto este tutorial te invito a que lo compartas con mas gente <a href={url}><img src={Compartir} alt="" height='16px' className='share-hover'/></a></h3> 
              </div>
              </div>
        </div>
      <Footer />
    </>
  )
}

export default DetalleTutorial