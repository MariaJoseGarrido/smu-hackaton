import React from 'react'
import booklogo from "../../Assets/img/booklogo.jpg"
import Fruits from "../../Assets/img/Fruits.png"
import '../../Style/Footer.css'
import '../../Assets/icofont/icofont.css'

const Footer = () => {
  return (
    <footer>
      <img className="logo" src={booklogo} />
      <div className="container">
        <div className="row align-items-start">
          <div className="col-sm-4 p-2">
            Menú Principal
            <li><a className="redes" href="https://www.unimarc.cl/">UNIMARC</a></li>
            <li><a className="redes" href="https://www.clubahorro.cl/">Club Ahorro</a></li>
            <li><a className="redes" href="https://www.unimarc.cl/locales_unimarc/">Locales</a></li>
            <li><a className="redes" href="https://www.unimarc.cl/">Recetas</a></li>
          </div>
          <div className="col-sm-4 p-2">
            Redes Sociales
            <li><i className="icofont-facebook"></i> <a className="redes" href="https://www.facebook.com/unimarc">Facebook</a></li>
            <li><i className="icofont-youtube-play"></i> <a className="redes" href="https://www.youtube.com/user/unimarccl">Youtube</a></li>
            <li><i className="icofont-twitter"></i> <a className="redes" href="https://twitter.com/unimarc">Twitter</a></li>
          </div>
          <div className="col-sm-4 p-2">
            Servicio al Cliente
            <li><i className="icofont-ui-call"></i>600 600 0025</li>
            <li><i className="icofont-mail"></i>contacto.unimarc@unimarc.cl</li>
          </div>
        </div>
      </div>
      <img className="footer-img" src={Fruits} />

    </footer>
  )
}

export default Footer