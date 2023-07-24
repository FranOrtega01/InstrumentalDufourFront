import React from 'react'
import './Header.scss'
import logo from '../../../../assets/img/logo.png'
import { BsQuestionCircle } from "react-icons/bs";



export const PreserviceHeader = ({setShowHelp}) => {

    

    return (
        <header className="header">
            <div>
                <h1>Instrumental Dufour</h1>
                <img src={logo} alt="Instrumental Dufour" />
            </div>
            <div>
                <BsQuestionCircle onClick={() => setShowHelp(true)} />
            </div>
        </header>
    )
}
