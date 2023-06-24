import React from 'react';

const CardDescripcion = ({data}) => {
  return (
    <div className="row">
    <div className="col-2 justify-content-end d-flex">
        <img src={data.logoEmpresa} alt="" width='70px' height='70px'/>
    </div>
    <div className="col-10">
        <h3 className="title fs-3">{data.titulo}</h3>
        <p className="text-color">{data.tituloEmpresa} | {data.fechas}</p>
            <ul className="row list-unstyled text-color">

               { data.listaTecnologias.map((tecnologia, index) => {
                     return (
                      <li className='col-4 mt-3' key={index}>
                            <img src={tecnologia.img} alt="" width='50px' height='50px' className='mx-3'/>
                            {tecnologia.titulo}
                      </li>
                     )
                })}
            </ul>
            <hr/>
    </div>
</div>
  )
}

export default CardDescripcion