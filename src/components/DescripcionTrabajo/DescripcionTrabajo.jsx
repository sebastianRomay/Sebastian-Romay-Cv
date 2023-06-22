import React from 'react';

// Componentes
import CardDescripcion from '../CardDescripcion/CardDescripcion';

// Estilos
import './DescripcionTrabajo.css';

// Iconos
import logoEmpresa from '../../img/logo-empresa.jfif';
import logoCoder from '../../img/logo-coder.jfif';
import logoConfluence from '../../img/Iconos/confluence-svgrepo-com.svg';
import logoReact from '../../img/Iconos/react-svgrepo-com.svg';
import logoGitlab from '../../img/Iconos/gitlab-svgrepo-com.svg';
import logoJira from '../../img/Iconos/jira-svgrepo-com.svg';
import logoMui from '../../img/Iconos/material-ui-svgrepo-com.svg';
import logoNode from '../../img/Iconos/node-js-svgrepo-com.svg';
import logoPSQL from '../../img/Iconos/postgresql-svgrepo-com.svg';
import logoHTML from '../../img/Iconos/html-5-svgrepo-com.svg';
import logoCSS from '../../img/Iconos/css-3-svgrepo-com.svg';
import logoBS from '../../img/Iconos/bootstrap-svgrepo-com.svg';
import logoGitHub from '../../img/Iconos/github-svgrepo-com.svg';
import logoGit from '../../img/Iconos/git-svgrepo-com.svg';
import logoSass from '../../img/Iconos/sass-svgrepo-com.svg';
import logoResponsive from '../../img/Iconos/responsive-svgrepo-com.svg';
import logoJS from '../../img/Iconos/javascript-svgrepo-com.svg';
import logoJquery from '../../img/Iconos/jquery-svgrepo-com.svg';

const expFkTech = {
        titulo: 'Software Engineer',
        tituloEmpresa: 'Fk Tech',
        logoEmpresa: logoEmpresa,
        fechas: 'Mayo 2021 - Presente',
        listaTecnologias: [
            {
                titulo: 'React JS',
                img: logoReact
            },
            {
                titulo: 'Confluence',
                img: logoConfluence
            },
            {
                titulo: 'Gitlab',
                img: logoGitlab
            },
            {
                titulo: 'Jira',
                img: logoJira
            },
            {
                titulo: 'Material UI',
                img: logoMui
            },
            {
                titulo: 'Node JS',
                img: logoNode
            },
            {
                titulo: 'PostgreSQL',
                img: logoPSQL
            }]
}

const expProfe = {
    titulo: 'Profesor de Desarrollo Web',
    tituloEmpresa: 'CoderHouse',
    logoEmpresa: logoCoder,
    fechas: 'Enero 2023 - Presente',
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
        } ]
}

const expTutor = {
    titulo: 'Tutor Desarrollo Web & Javascript',
    tituloEmpresa: 'CoderHouse',
    logoEmpresa: logoCoder,
    fechas: 'Junio 2021 - Presente',
    listaTecnologias: [
        {
            titulo: 'Javascript',
            img: logoJS
        },
        {
            titulo: 'Jquery',
            img: logoJquery
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
        }
    ]}


const DescripcionTrabajo = () => {
  return (
    <>
        <div className="container">
            <CardDescripcion expEmpresa={expFkTech} />
            <CardDescripcion expEmpresa={expProfe} />
            <CardDescripcion expEmpresa={expTutor} />
        </div>
    </>
  )
}

export default DescripcionTrabajo