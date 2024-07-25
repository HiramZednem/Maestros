import React from 'react';

function Footer() {
  return (
<div className='row'>
    <div className="col-md-12">
      <footer className="text-center text-lg-start text-white" style={{ backgroundColor: '#45526e' }}>
        <div className="container p-4 pb-0">
          <section className="">
            <div className="row">
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  CAO's Soft
                </h6>
                <p>
                    Convertimos la complejidad en simplicidad. Somos apasionados por el desarrollo 
                    de software de vanguardia y la resolución de problemas tecnológicos.
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Productos</h6>
                <p>
                  <a className="text-white">CodeLabs</a>
                </p>
                <p>
                  <a className="text-white">Licencia</a>
                </p>
                
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  links Utiles
                </h6>
                <p>
                  <a className="text-white">Ayuda</a>
                </p>
                <p>
                  <a className="text-white">Politica de privacidad</a>
                </p>
                <p>
                  <a className="text-white">Copyright</a>
                </p>
                
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Contacto</h6>
                <p><i className="fas fa-home mr-3"></i> Suchiapa, Chiapas 20120, Mx</p>
                <p><i className="fas fa-envelope mr-3"></i> infocodelabs@gmail.com</p>
                <p><i className="fas fa-phone mr-3"></i> + 52 965 107 3435</p>
                <p><i className="fas fa-phone mr-3"></i> + 52 961 558 5227</p>
              </div>
            </div>
          </section>

          <hr className="my-3" />

          <section className="p-3 pt-0">
            <div className="row d-flex align-items-center">
              <div className="col-md-7 col-lg-8 text-center text-md-start">
                <div className="p-3">
                  © 2023 Copyright:
                  <a className="text-white" href="https://caossoft.com/"> caossoft.com</a>
                </div>
              </div>

              <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                <a className="btn btn-outline-light btn-floating m-1" href="#" role="button"><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-outline-light btn-floating m-1" href="#" role="button"><i className="fab fa-tiktok"></i></a>
                <a className="btn btn-outline-light btn-floating m-1" href="caossoft1080@gmail.com" role="button"><i className="fab fa-google"></i></a>
                <a className="btn btn-outline-light btn-floating m-1" href="#" role="button"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </div>
    </div>
  );
}

export default Footer;
