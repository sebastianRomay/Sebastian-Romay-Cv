import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark mt-3">
    <div class="container align-items-center">
      <NavLink className="navbar-brand" to='/'>
        Sebastian Romay
      </NavLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end " id="navbarSupportedContent">
        <ul class="navbar-nav ">
          <li class="nav-item">
            <NavLink className="nav-link" aria-current="page" to='/formacion'>
              Formacion
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink className="nav-link" to='/experiencia'>
              Experiencia
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink className="nav-link" to='/proyectos'>
              Proyectos
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink className="nav-link" to='/tutoriales'>
            Tutoriales
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar