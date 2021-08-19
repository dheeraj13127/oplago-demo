import React from 'react'
import {GiOpenBook} from 'react-icons/gi'
import './css/Navbar.css'
function Navbar() {
  return (
    <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><GiOpenBook/>&nbsp;Oplago</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav p-2 me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link text-light"  href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="/">About</a>
        </li>
      </ul>
      <div className="d-flex">
              <a className="btn nav1Btn" href="/signIn">Enroll</a>
              
       </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar