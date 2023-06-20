import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="row">
                <div className="col">
                    <p className="text-color">© Sebastian Romay</p>
                </div>
                <div className="col justify-content-end d-flex gap-3">
                    <a class="bi bi-github fs-3" href='https://github.com/sebastianRomay' target='_blank'></a>
                    <a class="bi bi-instagram fs-3" href='https://www.instagram.com/sebastian_agustin/' target='_blank'></a>
                    <a class="bi bi-linkedin fs-3" href='https://www.linkedin.com/in/sebastianromay/' target='_blank'></a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer