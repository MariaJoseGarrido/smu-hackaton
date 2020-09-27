import React from 'react'
import booklogo from "../../Assets/img/booklogo.jpg"
import '../../Style/Menu.css';

const MenuPrincipal = () => {
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a className="navbar-brand" href="#"></a>
      <img className="logo"src={booklogo} alt="logo"/>
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item active">
          <a className="nav-link" href="#">HOME <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="#">CLUB AHORRO</a>
        </li>
        <li className="nav-item active ">
          <a className="nav-link" href="#">LOCALES</a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="#">RECETAS</a>
        </li>
      </ul>
    </div>
  </nav>

  )
}

export default MenuPrincipal