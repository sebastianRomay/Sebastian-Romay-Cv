import React from 'react';
import loader from '../../img/loader.gif';
import './Loader.css';

const Loader = () => {
  return (
    <div className='container d-flex justify-content-center align-items-center vh-100'>
        <img src={loader} alt="Loader" className='w-25'/>
    </div>
  )
}

export default Loader