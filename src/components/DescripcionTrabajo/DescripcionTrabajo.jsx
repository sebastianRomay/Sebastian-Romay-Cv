import React from 'react';

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


const DescripcionTrabajo = () => {
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-2 justify-content-end d-flex">
                    <img src={logoEmpresa} alt="" width='70px' height='70px'/>
                </div>
                <div className="col-10">
                    <h3 className="text-color">Software Engineer</h3>
                    <p className="text-color">Fk Tech | Mayo 2022 - Presente</p>
                        <ul className="row list-unstyled text-color">

                            <li className='col-4 mt-3'>
                                <img src={logoReact} alt="" width='50px' height='50px' className='mx-3'/>
                                React JS
                            </li>

                            <li className='col-4 mt-3'>
                                <img src={logoConfluence} alt="" width='50px' height='50px' className='mx-3'/>
                                Confluence
                            </li>

                            <li className='col-4 mt-3'>
                                <img src={logoGitlab} alt="" width='50px' height='50px' className='mx-3'/>
                                Gitlab
                            </li>

                            <li className='col-4 mt-3'>
                                <img src={logoJira} alt="" width='50px' height='50px' className='mx-3'/>
                                Jira
                            </li>

                            <li className='col-4 mt-3'>
                                <img src={logoMui} alt="" width='50px' height='50px' className='mx-3'/>
                                Material UI
                            </li>

                            <li className='col-4 mt-3'>
                                <img src={logoNode} alt="" width='50px' height='50px' className='mx-3'/>
                                Node JS
                            </li>

                            <li className='col-4 mt-3'>
                                <img src={logoPSQL} alt="" width='50px' height='50px' className='mx-3'/>
                                PostgreSQL
                            </li>
                        </ul>
                        <hr/>
                </div>
            </div>

            <div className="row">
                <div className="col-2 justify-content-end d-flex">
                    <img src={logoCoder} alt="" width='70px' height='70px'/>
                </div>
                <div className="col-10">
                    <h3 className="text-color">Profesor de Desarrollo Web</h3>
                    <p className="text-color">CoderHouse | Enero 2023 - Presente</p>
                        <ul className="row list-unstyled text-color">

                            <li className='col-4 mt-3'>
                                <img src={logoHTML} alt="" width='50px' height='50px' className='mx-3'/>
                                HTML
                            </li>

                            <li className='col-4 mt-3'>
                                <img src={logoCSS} alt="" width='50px' height='50px' className='mx-3'/>
                                CSS
                            </li>

                            <li className='col-4 mt-3'>
                                <img src={logoBS} alt="" width='50px' height='50px' className='mx-3'/>
                                Bootstrap
                            </li>

                            <li className='col-4 mt-3'>
                                <img src={logoGitHub} alt="" width='50px' height='50px' className='mx-3'/>
                                Github
                            </li>

                            <li className='col-4 mt-3'>
                                <img src={logoGit} alt="" width='50px' height='50px' className='mx-3'/>
                                Git
                            </li>

                            <li className='col-4 mt-3'>
                                <img src={logoSass} alt="" width='50px' height='50px' className='mx-3'/>
                                SASS
                            </li>

                            <li className='col-4 mt-3'>
                                <img src={logoResponsive} alt="" width='50px' height='50px' className='mx-3'/>
                                Responsive Design
                            </li>
                        </ul>
                        <hr />
                </div>
            </div>

            <div className="row">
                <div className="col-2 justify-content-end d-flex">
                    <img src={logoCoder} alt="" width='70px' height='70px'/>
                </div>
                <div className="col-10">
                    <h3 className="text-color">Tutor Desarrollo Web & Javascript</h3>
                    <p className="text-color">CoderHouse | Junio 2021 - Presente</p>
                        <ul className="row list-unstyled text-color">

                            <li className='col-4 mt-3'>
                                <img src={logoJS} alt="" width='50px' height='50px' className='mx-3'/>
                                Javascript
                            </li>
                            <li className='col-4 mt-3'>
                                <img src={logoJquery} alt="" width='50px' height='50px' className='mx-3'/>
                                Jquery
                            </li>
                            <li className='col-4 mt-3'>
                                <img src={logoHTML} alt="" width='50px' height='50px' className='mx-3'/>
                                HTML
                            </li>

                            <li className='col-4 mt-3'>
                                <img src={logoCSS} alt="" width='50px' height='50px' className='mx-3'/>
                                CSS
                            </li>

                            <li className='col-4 mt-3'>
                                <img src={logoBS} alt="" width='50px' height='50px' className='mx-3'/>
                                Bootstrap
                            </li>

                            <li className='col-4 mt-3'>
                                <img src={logoGitHub} alt="" width='50px' height='50px' className='mx-3'/>
                                Github
                            </li>

                            <li className='col-4 mt-3'>
                                <img src={logoGit} alt="" width='50px' height='50px' className='mx-3'/>
                                Git
                            </li>

                            <li className='col-4 mt-3'>
                                <img src={logoSass} alt="" width='50px' height='50px' className='mx-3'/>
                                SASS
                            </li>

                            <li className='col-4 mt-3'>
                                <img src={logoResponsive} alt="" width='50px' height='50px' className='mx-3'/>
                                Responsive Design
                            </li>
                        </ul>
                        <hr />
                </div>
            </div>
        </div>
    </>
  )
}

export default DescripcionTrabajo