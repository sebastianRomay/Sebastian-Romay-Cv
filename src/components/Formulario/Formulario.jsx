import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

// Estilos
import './Formulario.css';

const Formulario = () => {
    const MySwal = withReactContent(Swal)
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('default_service', 'template_rojfqpa', form.current, 'user_p0zSAju5qyHNqcIepzsuB')
      .then((result) => {
        Swal.fire({
            title: 'Enviado!',
            text: 'Mensaje enviado con exito!',
            icon: 'success',
            confirmButtonText: 'Cerrar'
          })
          e.target.reset();
      }, (error) => {
        Swal.fire({
            title: 'Error!',
            text: 'Ocurrio un error al enviar el mensaje',
            icon: 'error',
            confirmButtonText: 'Cerrar'
          })
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className='formulario d-flex flex-column w-50 justify-content-center align-items-center gap-1 text-color'>

      <label>Nombre:</label>
      <input type="text" name="from_name" className='form-control' placeholder='Sebastian Romay' required/>

      <label>Email:</label>
      <input type="email" name="from_email" className='form-control' placeholder='sebastian@ejemplo.com' required/>

      <label>Mensaje:</label>
      <textarea name="message" cols='10' rows='10' className='form-control' required/>

      <div className='d-flex justify-content-center mt-4'>
        <input type='submit' className='btn btn-outline-light' value='Enviar' />
      </div>
    </form>
  );
};

export default Formulario