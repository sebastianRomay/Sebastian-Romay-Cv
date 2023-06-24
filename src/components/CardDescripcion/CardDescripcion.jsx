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
                {/* <li className='col-4 mt-3'>
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
                </li> */}
            </ul>
            <hr/>
    </div>
</div>
  )
}

export default CardDescripcion