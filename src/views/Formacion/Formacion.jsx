// Dependencias
import React from 'react';

// Componentes
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
// import DescripcionTrabajo from '../../components/DescripcionTrabajo/DescripcionTrabajo';
import CardDescripcion from '../../components/CardDescripcion/CardDescripcion';

// Iconos
import logoCoder from '../../img/logo-coder.jfif';
import logoReact from '../../img/Iconos/react-svgrepo-com.svg';
import logoNode from '../../img/Iconos/node-js-svgrepo-com.svg';
import logoHTML from '../../img/Iconos/html-5-svgrepo-com.svg';
import logoCSS from '../../img/Iconos/css-3-svgrepo-com.svg';
import logoBS from '../../img/Iconos/bootstrap-svgrepo-com.svg';
import logoGitHub from '../../img/Iconos/github-svgrepo-com.svg';
import logoGit from '../../img/Iconos/git-svgrepo-com.svg';
import logoSass from '../../img/Iconos/sass-svgrepo-com.svg';
import logoResponsive from '../../img/Iconos/responsive-svgrepo-com.svg';
import logoJS from '../../img/Iconos/javascript-svgrepo-com.svg';
import logoNucba from '../../img/logoNucba.jfif';
import logoEdIt from '../../img/logoEdIT.jfif';
import logoExpress from '../../img/Iconos/express-svgrepo-com.svg';
import logoMongo from '../../img/Iconos/mongodb-svgrepo-com.svg';
import logoFirebase from '../../img/Iconos/firebase-svgrepo-com.svg';


const Formacion = () => {

  const cursoReact = {
    titulo: 'React JS',
    tituloEmpresa: 'CoderHouse',
    logoEmpresa: logoCoder,
    fechas: 'Enero 2022 - Marzo 2022',
    listaTecnologias: [
      {
        titulo: 'React JS',
        img: logoReact
      },
      {
        titulo: 'Node JS',
        img: logoNode
      },
      {
        titulo: 'JavaScript',
        img: logoJS
      },
      {
        titulo: 'Firebase',
        img: logoFirebase
      }
    ]
    }

  const cursoFrontEnd = {
      titulo: 'Desarrollo Front-End',
      tituloEmpresa: 'Nucba',
      logoEmpresa: logoNucba,
      fechas: 'Abril 2021 - Noviembre 2021',
      listaTecnologias: [
        {
          titulo: 'HTML',
          img: logoHTML
        },
        {
          titulo: 'CSS',
          img: logoCSS
        },
        {
          titulo: 'Bootstrap',
          img: logoBS
        },
        {
          titulo: 'JavaScript',
          img: logoJS
        },
        {
          titulo: 'Git',
          img: logoGit
        },
        {
          titulo: 'GitHub',
          img: logoGitHub
        },
        {
          titulo: 'Sass',
          img: logoSass
        },
        {
          titulo: 'Responsive Design',
          img: logoResponsive
        },
        {
          titulo: 'React JS',
          img: logoReact
        },
        {
          titulo: 'Node JS',
          img: logoNode
        }]
    }

  const cursoEdIt = {
      titulo: 'Backend con Node JS',
      tituloEmpresa: 'Educacion IT',
      logoEmpresa: logoEdIt,
      fechas: 'Septiembre 2022 - Diciembre 2022',
      listaTecnologias: [
        {
          titulo: 'Node JS',
          img: logoNode
        },
        {
          titulo: 'JavaScript',
          img: logoJS
        },
        {
          titulo: 'Express',
          img: logoExpress
        },
        {
          titulo: 'MongoDB',
          img: logoMongo
        },
      ]}

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <CardDescripcion data={cursoFrontEnd} />
        <CardDescripcion data={cursoEdIt} />
        <CardDescripcion data={cursoReact} />
      </div>
      <Footer />
    </>
  )
}

export default Formacion