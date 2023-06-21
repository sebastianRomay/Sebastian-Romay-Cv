import React from "react";

import portadaCard from "../../img/favicon.png";

// Estilos
import "./Card.css";

const Card = () => {
  return (
    <div class="card card-w">
      <img src={portadaCard} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Poner Favicon en tu sitio web</h5>
        <p class="card-text">
            ¿Querés saber cómo poner un favicon a tu landing page?
        </p>
        <a href="#" class="btn btn-outline-dark">
          Leer mas
        </a>
      </div>
    </div>
  );
};

export default Card;
