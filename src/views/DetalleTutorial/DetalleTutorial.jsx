// Dependencias
import React from 'react';
import { useParams } from 'react-router-dom';

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

  const url = window.location.href;

  return (
    <>  
    <Navbar />
        <div className="container w-60">
          <div className="row mt-5">
            <div className="col">
              <h1 className="title text-start mb-3 fs-1">Poner Favicon en tu sitio web</h1>
              <p className="text-color text-start">Junio 23, 2023</p>
              <div className='d-flex align-items-end'>
                <Avatar width={'80px'} height={'80px'} border={'2px solid #fff'}/>
                <div className="mx-3">
                <p className='p-0 mb-2 text-color fs-5'>Sebastian Romay</p>
                <a className="bi bi-github fs-6 text-decoration-none " href='https://github.com/sebastianRomay' target='_blank'>  Github</a>
                </div>
              </div>
            </div>
            <div className="col">
              <img src={portadaFavicon} alt="" width='100%' height='250px' style={{border: '1px solid white'}} />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p className="text-color text-start mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio voluptatibus quam iure! Dolorum repudiandae vel beatae tenetur? Suscipit tenetur voluptatibus, labore, alias consequuntur quae minus reiciendis ullam illum, modi beatae?</p>
              </div>
            </div>
            <hr />
            <div className="row mt-3">
              <div className="col">
                <h2 className='fs-4 title'>Titulo </h2>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col"> 
                <p className='text-color'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum nostrum natus sed eligendi dolorem laboriosam beatae dolores. Tempora aperiam,   minima distinctio dolores magnam minus eligendi a labore, debitis accusantium rem!</p>
                <img src={portadaFavicon} alt="" width='100%' height='250px' style={{border: '1px solid white'}} />
                <p className='text-color mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum nostrum natus sed eligendi dolorem laboriosam beatae dolores. Tempora aperiam,   minima distinctio dolores magnam minus eligendi a labore, debitis accusantium rem!</p>
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