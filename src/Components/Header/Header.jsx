import React from 'react'
import './Header.scss'
import logo from '../../assets/img/logo.png'

export const Header = () => {
    return (
        <header className="header">
                <div>
                    <a href="#">
                        <h1>Instrumental Dufour</h1>
                    </a>
                    <a href="#"><img src={logo} alt="Instrumental Dufour" /></a>
                </div>
        </header>
    )
}
