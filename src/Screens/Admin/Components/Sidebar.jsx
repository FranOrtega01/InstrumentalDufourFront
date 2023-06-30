import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import logo from '../../../assets/img/logo2.png'
import { BsCaretLeftFill, BsBuildingAdd, BsFillPersonPlusFill } from 'react-icons/bs'

export const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {

    const [shipShow, setShipShow] = useState(false)
    const [enterpriseShow, setEnterpriseShow] = useState(false)


    //#region Data Links
    const linksArray = [
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
            modal: () => setShipShow(true)
        },
        {
            label: 'Add company',
            icon: <BsBuildingAdd />,
            modal: () => setEnterpriseShow(true)
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
                <BsCaretLeftFill className="arrow"

                />
            </button>
            <div className="logoContent">
                <div className="imgContent">
                    <img src={logo} alt="Instrumental Dufour Logo"
                        style={{ width: sidebarOpen ? 40 : 55 }}
                    />
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

            {linksArray.map(({ label, to }) => (
                <div key={label} style={{ width: sidebarOpen ? '80%' : '90%' }} className="linkContainer">
                    <Link to={to}>
                        {label}
                    </Link>
                </div>
            ))}
            <Modal
                show={shipShow}
                onHide={() => setShipShow(false)}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Ship</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form action="api/admin/contact" method="post" id="contactForm">

                        {/* Enterprise  */}
                        <div className="form-group">
                            <select className="form-control" id="enterprise" name="enterprise" aria-describedby="enterprise">
                            </select>
                        </div>

                        {/* Owner  */}
                        <div className="form-group">
                            <input required type="text" className="form-control" id="owner" name="owner" aria-describedby="owner" placeholder="Owner" />
                        </div>

                        {/* Name  */}
                        <div className="form-group">
                            <input required type="text" className="form-control" id="name" name="name" aria-describedby="name" placeholder="Name" />
                        </div>

                        {/* Email  */}
                        <div className="form-group">
                            <input required type="email" className="form-control" id="email" name="email" aria-describedby="email" placeholder="Email" />
                        </div>

                        {/* IMO Number  */}
                        <div className="form-group">
                            <input required type="text" className="form-control" id="imoNumber" name="imoNumber" aria-describedby="imoNumber" placeholder="IMO Number" />
                        </div>

                        {/* MMSI  */}
                        <div className="form-group">
                            <input required type="text" className="form-control" id="mmsi" name="mmsi" aria-describedby="mmsi" placeholder="MMSI" />
                        </div>

                        {/* Call Sign  */}
                        <div className="form-group">
                            <input required type="text" className="form-control" id="callSign" name="callSign" aria-describedby="callSign" placeholder="Call sign"/>
                        </div>

                        {/* Flag (Country)  */}
                        <div className="form-group">
                            <input required className="form-control" id="flag" name="flag" aria-describedby="flag" placeholder="Flag" />
                        </div>

                        {/* Port Reglamentation  */}
                        <div className="form-group">
                            <input required type="text" className="form-control" id="portReg" name="portReg" aria-describedby="portReg" placeholder="Port Reg"/>
                        </div>

                        {/* Compass  */}
                        <div className="form-group">
                            <input required type="text" className="form-control" id="compass" name="compass" aria-describedby="compass" placeholder="Compass" />
                        </div>

                        {/* Mark  */}
                        <div className="form-group">
                            <input type="text" className="form-control" id="mark" name="mark" aria-describedby="mark" placeholder="Mark" />
                        </div>

                        {/* Serial Number  */}
                        <div className="form-group">
                            <input type="text" className="form-control" id="serialNumber" name="serialNumber" aria-describedby="serialNumber" placeholder="Serial Number" />
                        </div>

                        {/* Status */}
                        <div className="form-group">
                            <select type="text" className="form-control" id="status" name="status" aria-describedby="status">
                                <option disabled selected value=''>Select status</option>
                                <option value="newShip">Nuevo Barco</option>
                                <option value="waiting">Esperando Info</option>
                                <option value="compensating">En Compensación</option>
                                <option value="signing">Esperando Firma</option>
                                <option value="billing">En Facturacion</option>
                                <option value="closed">Cerrado</option>
                            </select>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShipShow(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => setShipShow(false)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal
                show={enterpriseShow}
                onHide={() => setEnterpriseShow(false)}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Enterprise</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form action="api/admin/enterprise" method="post" id="enterpriseForm">
                        <div className="form-group">
                            <input type="text" className="form-control" id="name" name="name" aria-describedby="name" placeholder="Name" />
                        </div>

                        <div className="form-group">
                            <input type="text" className="form-control" id="country" name="country" aria-describedby="country" placeholder="Country" />
                        </div>

                        <div className="form-group">
                            <input type="text" className="form-control" id="phone" name="phone" aria-describedby="phone" placeholder="Phone Number" />
                        </div>

                        <div className="form-group">
                            <input type="text" className="form-control" id="adress" name="adress" aria-describedby="adress" placeholder="Adress" />
                        </div>

                        <div className="form-group">
                            <input type="email" className="form-control" id="email" name="email" aria-describedby="email" placeholder="Email" />
                        </div>

                        <div className="form-group">
                            <input type="text" className="form-control" id="cuit" name="cuit" aria-describedby="cuit" placeholder="Cuit"  />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setEnterpriseShow(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => setEnterpriseShow(false)}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </section>
    )
}

