// Dependencias
import React from "react";

// Imagenes
import portadaCard from "../../img/favicon.png";

// Estilos
import "./Card.css";
import { NavLink } from "react-router-dom";

const Card = ({data, id}) => {
  return (
    <div class="card card-styles" key={data.index}>
      <img src={data.imagen} class="card-img-top" alt="..." />
      <p className="card-text-img" style={{backgroundColor: data.colorCategoria}}>{data.categoria}</p>
      <div class="card-body">
        <h5 class="card-title fw-bold text-color-dark">{data.titulo}</h5>
        <p class="card-text fs-01 text-color-grey">
           {data.fecha}
        </p>
        <NavLink to={`/tutoriales/${id}/${data.titulo.toLowerCase().replace(/\s/g, '-')}`}className="btn btn-outline-light">
          Leer mas
        </NavLink>
      </div>
    </div>
  );
};

export default Card;