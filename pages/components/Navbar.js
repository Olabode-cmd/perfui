import React from 'react'
import Logolight from '../../public/images/logo-light.png'
import Logodark from '../../public/images/logo-dark.png'
import BarIcon from '../../public/images/baricon.svg'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src={Logolight.src} className="nav-logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <img src={BarIcon.src} className="baricon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <button className='btn secondary-btn ms-3'>Join Now</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
