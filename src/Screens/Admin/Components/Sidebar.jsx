import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../../assets/img/logo2.png'
import { BsFillClipboardFill, BsCaretLeftFill, BsBuildingAdd, BsFillPersonPlusFill } from 'react-icons/bs'

import { ModalContext } from '../../../Context/modalContext';
import config from '../../../config/config';


export const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {

    const { openContactModal, openEnterpriseModal } = useContext(ModalContext);

    const [token, setToken] = useState(null)
    const [copy, setCopy] = useState(null)


    const generateToken = async () => {
        try {
            const response = await fetch(`${config.backURL}/preservice/generate-token`);
            const data = await response.json();
            console.log(data);
            const generatedToken = data.payload;

            setToken(generatedToken);
            copyToClipboard(`http://127.0.0.1:3000/preservice/${generatedToken}`);
            // copyToClipboard(generatedToken);
        } catch (error) {
            console.error('Error al generar el token:', error);
        }
    };

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                setCopy('Copied to clipboard!')
            })
            .catch((error) => {
                setCopy("Couldn't copy to clipboard")
            });
    };

    //#region Data Links
    const linksArray = [
        {
            label: 'Dashboard',
            to: '/admin/dashboard'
        },
        {
            label: 'Contacts',
            to: '/admin/contact'
        },
        {
            label: 'Enterprises',
            to: '/admin/enterprise'
        }
    ]

    const modalArray = [
        {
            label: 'Add ship',
            icon: <BsFillPersonPlusFill />,
            modal: () => openContactModal()


        },
        {
            label: 'Add company',
            icon: <BsBuildingAdd />,
            modal: () => openEnterpriseModal()
        },
    ]
    //#endregion

    return (
        <section className='sidebar'>
            <button className="sidebarBtn"
                style={{ transform: `rotate(${sidebarOpen ? 0 : 180}deg)` }}
                onClick={() => {
                    setSidebarOpen(!sidebarOpen)
                }}
            >
                <BsCaretLeftFill className="arrow" />
            </button>
            <div className="logoContent">
                <div className="imgContent">
                    {!sidebarOpen && <img src={logo} alt="Instrumental Dufour"
                        style={{ width: sidebarOpen ? 40 : 55 }}
                    />}
                </div>
                {sidebarOpen && <h2>Admin</h2>}
            </div>
            {sidebarOpen && <h3>Interface</h3>}
            {modalArray.map(({ label, icon, modal }) => (
                <div key={label} onClick={modal} className={`modalLinkContainer ${sidebarOpen ? '' : 'big'}`}>
                    {icon}
                    {sidebarOpen && <span>{label}</span>}
                </div>

            ))}
            {sidebarOpen && <h3>Views</h3>}

            {linksArray.map(({ label, to }) => (
                <div key={label} style={{ width: sidebarOpen ? '80%' : '90%' }} className="linkContainer">
                    <NavLink to={to} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }>
                        {label}
                    </NavLink>
                </div>
            ))}
            {sidebarOpen && <h3>Pre service</h3>}
            <div className='tokenContainer'>
                <div onClick={generateToken} className={sidebarOpen ? 'jwtLink jwtBorder' : 'jwtLink'}>
                    {sidebarOpen && <p className='me-3'>{token ?? 'Click to generate Token'}</p>}
                    <BsFillClipboardFill />
                </div>
                {token && <span>{copy}</span>}
            </div>

        </section>
    )
}

