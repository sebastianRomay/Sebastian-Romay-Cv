import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark mt-3">
    <div class="container align-items-center">
      <a class="navbar-brand" href="#">
        Sebastian Romay
      </a>
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
            <a class="nav-link" aria-current="page" href="#">
              Sobre mi
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Experiencia
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Blog
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar