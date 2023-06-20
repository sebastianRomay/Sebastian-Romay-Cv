import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Loader from '../../components/Loader/Loader';
import Footer from '../../components/Footer/Footer';

const SobreMi = () => {
  return (
    <>
      {/* <Loader /> */}
      <Navbar />
      <div className="container h-80">
        <div className="row">
          <div className="col">
            <h1 className="text-center title mt-3">Sobre Mi</h1>
          </div>
          <div className="row">
            <div className="col">
              <p className="text-color text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque doloremque voluptatibus, nemo sed nostrum eum quisquam voluptatum? Expedita, maxime, nulla assumenda sunt vel amet voluptas eum error, nostrum quibusdam molestias.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque doloremque voluptatibus, nemo sed nostrum eum quisquam voluptatum? Expedita, maxime, nulla assumenda sunt vel amet voluptas eum error, nostrum quibusdam molestias.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque doloremque voluptatibus, nemo sed nostrum eum quisquam voluptatum? Expedita, maxime, nulla assumenda sunt vel amet voluptas eum error, nostrum quibusdam molestias.
                </p>
                </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default SobreMi