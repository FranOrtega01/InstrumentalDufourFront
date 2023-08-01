import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../../assets/img/logo2.png'
import { BsFillClipboardFill, BsCaretLeftFill, BsBuildingAdd, BsFillPersonPlusFill } from 'react-icons/bs'

import { ModalContext } from '../../../Context/modalContext';
import { AuthContext } from '../../../Context/authContext'
import config from '../../../config/config';


export const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {

    const { openContactModal, openEnterpriseModal } = useContext(ModalContext);
    const { currentUser } = useContext(AuthContext)

    const [preToken, setPreToken] = useState(null)
    const [postToken, setPostToken] = useState(null)
    const [copy, setCopy] = useState(null)


    const generateToken = async (service) => {
        try {
            const response = await fetch(`${config.backURL}/preservice/generate-token`);
            const data = await response.json();
            const generatedToken = data.payload;

            service === 'preservice' ? setPreToken(generatedToken) : setPostToken(generatedToken)
            copyToClipboard(`https://instrumentaldufour.net/${service}/${generatedToken}`, service);
        } catch (error) {
            console.error('Error al generar el token:', error);
        }
    };

    const copyToClipboard = (text, service) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                setCopy('Copied to clipboard!')
                setTimeout(() => {
                    setCopy('')
                    service === 'preservice' ? setPreToken(null) : setPostToken(null)

                }, 3000);
            })
            .catch(() => {
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
            {currentUser.role === 'admin' && (
                <>
                    {sidebarOpen && <h3>Interface</h3>}
                    {modalArray.map(({ label, icon, modal }) => (
                        <div key={label} onClick={modal} className={`modalLinkContainer ${sidebarOpen ? '' : 'big'}`}>
                            {icon}
                            {sidebarOpen && <span>{label}</span>}
                        </div>

                    ))}
                </>
            )}
            {sidebarOpen && <h3>Views</h3>}

            {linksArray.map(({ label, to }) => {
                if (label === 'Enterprises' && currentUser.role !== 'admin') {
                    return null;
                }
                return (

                    <div key={label} style={{ width: sidebarOpen ? '80%' : '90%' }} className="linkContainer">
                        <NavLink to={to} className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }>
                            {label}
                        </NavLink>
                    </div>
                )
            })}
            {sidebarOpen && <h3>Services</h3>}
            <div className='tokenContainer'>
                <h4>Pre service</h4>
                <div onClick={() => generateToken('preservice')} className={sidebarOpen ? 'jwtLink jwtBorder' : 'jwtLink'}>
                    {sidebarOpen && <p className='me-3'>{preToken ?? 'Click to generate Token'}</p>}
                    <BsFillClipboardFill />
                </div>
                {preToken && <span>{copy}</span>}
            </div>

            <div className='tokenContainer mt-4'>
                <h4>Post service</h4>
                <div onClick={() => generateToken('postservice')} className={sidebarOpen ? 'jwtLink jwtBorder' : 'jwtLink'}>
                    {sidebarOpen && <p className='me-3'>{postToken ?? 'Click to generate Token'}</p>}
                    <BsFillClipboardFill />
                </div>
                {postToken && <span>{copy}</span>}
            </div>

        </section>
    )
}

