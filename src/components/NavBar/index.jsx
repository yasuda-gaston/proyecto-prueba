import React from 'react'
import '../NavBar/style.scss'
import logoSoccer from './logo.png'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <a className="navbar-brand" href="/#">
                <img src={logoSoccer} style={{ width: '10rem' }} alt="logo soccer shop" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#">Uniform</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#">Short</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#">Shoes</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar