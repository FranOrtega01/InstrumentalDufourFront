import React, { createContext, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import config from '../config/config';
import { BsFillTrashFill } from 'react-icons/bs'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ModalContext = createContext();

const ModalProvider = ({ updateEnterprises, updateContacts, enterprises, children }) => {
    const [showShip, setShowShip] = useState(false);
    const [showEnterprise, setShowEnterprise] = useState(false);
    const [showHistory, setShowHistory] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());

    // Contact Modal

    const [contactEnterprise, setContactEnterprise] = useState('');
    const [contactOwner, setContactOwner] = useState('');
    const [contactName, setContactName] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactImo, setContactImo] = useState('');
    const [contactMmsi, setContactMmsi] = useState('');
    const [contactCallSign, setContactCallSign] = useState('');
    const [contactFlag, setContactFlag] = useState('');
    const [contactPort, setContactPort] = useState('');
    const [contactCompass, setContactCompass] = useState('');
    const [contactMark, setContactMark] = useState('');
    const [contactSerial, setContactSerial] = useState('');
    const [contactStatus, setContactStatus] = useState('');
    const [contactID, setContactID] = useState(null);

    // Enterprise Modal

    const [enterpriseName, setEnterpriseName] = useState('');
    const [enterpriseCountry, setEnterpriseCountry] = useState('');
    const [enterpriseNumber, setEnterpriseNumber] = useState('');
    const [enterpriseAdress, setEnterpriseAdress] = useState('');
    const [enterpriseEmail, setEnterpriseEmail] = useState('');
    const [enterpriseCuit, setEnterpriseCuit] = useState('');

    const [enterpriseID, setEnterpriseID] = useState(null);

    // History Modal 

    const [history, setHistory] = useState([]);
    const [historyMessage, setHistoryMessage] = useState('')
    const [historyID, setHistoryID] = useState(null);

    //#region Reset
    const resetContactForm = () => {
        setContactEnterprise('')
        setContactOwner('')
        setContactName('')
        setContactEmail('')
        setContactImo('')
        setContactMmsi('')
        setContactCallSign('')
        setContactFlag('')
        setContactPort('')
        setContactCompass('')
        setContactMark('')
        setContactSerial('')
        setContactStatus('')
        setContactID(null)
        setSelectedDate(new Date());

    }

    const resetEnterpriseForm = () => {
        setEnterpriseAdress('')
        setEnterpriseCountry('')
        setEnterpriseCuit('')
        setEnterpriseEmail('')
        setEnterpriseName('')
        setEnterpriseNumber('')
        setEnterpriseID(null)
    }

    //#endregion

    const openContactModal = async (id = null) => {
        if (id) {
            setContactID(id);
            const response = await fetch(`${config.backURL}/api/admin/contact/${id}`, {
                credentials: 'include'
            })
            const json = await response.json()
            const contact = await json.payload

            setContactEnterprise(contact.enterprise)
            setContactOwner(contact.owner)
            setContactName(contact.name)
            setContactEmail(contact.email)
            setContactImo(contact.imoNumber)
            setContactMmsi(contact.mmsi)
            setContactCallSign(contact.callSign)
            setContactFlag(contact.flag)
            setContactPort(contact.portReg)
            setContactCompass(contact.compass)
            setContactMark(contact.mark)
            setContactSerial(contact.serialNumber)
            setContactStatus(contact.status)
            setSelectedDate(contact?.alerts[0]?.date ? new Date(contact.alerts[0].date) : new Date())
        }
        setShowShip(true)
    };

    const openEnterpriseModal = async (id = null) => {
        if (id) {
            setEnterpriseID(id);
            const response = await fetch(`${config.backURL}/api/admin/enterprise/${id}`, {
                credentials: 'include'

            })

            const json = await response.json()
            const enterprise = await json.payload
            setEnterpriseName(enterprise?.name)
            setEnterpriseCountry(enterprise?.country)
            setEnterpriseNumber(enterprise?.phone)
            setEnterpriseAdress(enterprise?.adress)
            setEnterpriseEmail(enterprise?.email)
            setEnterpriseCuit(enterprise?.cuil)

        }
        setShowEnterprise(true)
    };

    const fetchHisotry = async (id) => {
        const response = await fetch(`${config.backURL}/api/admin/contact/${id}/history`, {
            credentials: 'include'

        })
        const json = await response.json();
        const messages = await json.payload
        setHistory(messages)
    }

    const openHistoryModal = async (id) => {
        setHistoryID(id)
        fetchHisotry(id)
        setShowHistory(true)
    }

    const closeModal = () => {
        contactID && resetContactForm()
        enterpriseID && resetEnterpriseForm()
        setContactID(null);
        setEnterpriseID(null)
        setHistoryID(null)
        setShowShip(false)
        setShowEnterprise(false)
        setShowHistory(false)
    };

    //#region Submit
    // Contact Submit
    const handleContactSubmit = async (method) => {
        const data = JSON.stringify({
            enterprise: contactEnterprise,
            owner: contactOwner,
            name: contactName,
            email: contactEmail,
            imoNumber: contactImo,
            mmsi: contactMmsi,
            callSign: contactCallSign,
            flag: contactFlag,
            portReg: contactPort,
            compass: contactCompass,
            mark: contactMark,
            serialNumber: contactSerial,
            status: contactStatus,
            alertDate: selectedDate
        })
        const uri = `${config.backURL}/api/admin/contact${method === 'POST' ? '' : '/' + contactID}`
        try {
            const response = await fetch(uri, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',

                body: data
            })
            if (response.ok) {
                updateContacts()
                resetContactForm()
                closeModal()
            }
        } catch{
        }
    }

    // Enterprise Submit
    const handleEnterpriseSubmit = async (method) => {
        const data = JSON.stringify({
            name: enterpriseName,
            email: enterpriseEmail,
            country: enterpriseCountry,
            cuit: enterpriseCuit,
            adress: enterpriseAdress,
            phone: enterpriseNumber
        })
        const uri = `${config.backURL}/api/admin/enterprise${method === 'POST' ? '' : '/' + enterpriseID}`
        try {
            const response = await fetch(uri, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: data
            })
            const json = await response.json()
            if (response.ok) {
                resetEnterpriseForm()
                updateEnterprises()
                closeModal()
            } else {
                console.error(json.message);
            }
        } catch {
        }
    }

    const handleHistorySubmit = async () => {
        try {
            const response = await fetch(`${config.backAPI}/contact/${historyID}/history`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',

                body: JSON.stringify({ message: historyMessage })
            })
            const json = await response.json()
            if (response.ok) {
                setHistoryMessage('')
                fetchHisotry(historyID)
            }
        } catch{
        }
    }

    const handleHistoryDelete = async (e) => {
        const el = e.target.closest('svg');
        const id = el.getAttribute('data-id');
        try {
            const response = await fetch(`${config.backAPI}/contact/${historyID}/history/${id}`, {
                method: 'DELETE',
                credentials: 'include',

            })
            const json = await response.json()
            if (response.ok) {
                fetchHisotry(historyID)
            }
        } catch {
        }
    }
    //#endregion

    // Modals Content

    //#region Modal Content
    const modalShipContent = (
        <Modal
            show onHide={closeModal}
        >
            <Modal.Header closeButton>
                <Modal.Title style={styles.title}>{contactID ? 'Update Ship' : 'Add Ship'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form id="contactForm" className='row'>

                    {/* Enterprise  */}
                    <div className="form-group">
                        <select className="form-control" id="enterprise" name="enterprise" aria-describedby="enterprise"
                            value={contactEnterprise}
                            onChange={e => setContactEnterprise(e.target.value)}
                        >
                            <option value="" selected disabled>Enterprise</option>
                            {enterprises?.map(el =>
                                <option key={`contactModal - ${el.name}`} value={el.name}>{el.name}</option>
                            )}
                        </select>
                    </div>

                    {/* Owner  */}
                    <div className="form-group">
                        <input required type="text" className="form-control"
                            id="owner"
                            name="owner"
                            aria-describedby="owner"
                            placeholder="Owner"
                            value={contactOwner}
                            onChange={(e) => setContactOwner(e.target.value)}
                        />
                    </div>

                    {/* Name  */}
                    <div className="form-group">
                        <input required type="text" className="form-control" id="name" name="name" aria-describedby="name" placeholder="Name"
                            value={contactName}
                            onChange={(e) => setContactName(e.target.value)}
                        />
                    </div>

                    {/* Email  */}
                    <div className="form-group">
                        <input required type="email" className="form-control" id="email" name="email" aria-describedby="email" placeholder="Email"
                            value={contactEmail}
                            onChange={(e) => setContactEmail(e.target.value)} />
                    </div>

                    {/* IMO Number  */}
                    <div className="form-group col-6">
                        <input required type="text" className="form-control" id="imoNumber" name="imoNumber" aria-describedby="imoNumber" placeholder="IMO Number"
                            value={contactImo}
                            onChange={(e) => setContactImo(e.target.value)} />
                    </div>

                    {/* MMSI  */}
                    <div className="form-group col-6">
                        <input required type="text" className="form-control" id="mmsi" name="mmsi" aria-describedby="mmsi" placeholder="MMSI"
                            value={contactMmsi}
                            onChange={(e) => setContactMmsi(e.target.value)}
                        />
                    </div>

                    {/* Call Sign  */}
                    <div className="form-group col-6">
                        <input required type="text" className="form-control" id="callSign" name="callSign" aria-describedby="callSign" placeholder="Call sign"
                            value={contactCallSign}
                            onChange={(e) => setContactCallSign(e.target.value)} />
                    </div>

                    {/* Flag (Country)  */}
                    <div className="form-group col-6">
                        <input required className="form-control" id="flag" name="flag" aria-describedby="flag" placeholder="Flag"
                            value={contactFlag}
                            onChange={(e) => setContactFlag(e.target.value)} />
                    </div>

                    {/* Port Reglamentation  */}
                    <div className="form-group col-6">
                        <input required type="text" className="form-control" id="portReg" name="portReg" aria-describedby="portReg" placeholder="Port Reg"
                            value={contactPort}
                            onChange={(e) => setContactPort(e.target.value)} />
                    </div>

                    {/* Compass  */}
                    <div className="form-group col-6">
                        <input required type="text" className="form-control" id="compass" name="compass" aria-describedby="compass" placeholder="Compass"
                            value={contactCompass}
                            onChange={(e) => setContactCompass(e.target.value)} />
                    </div>

                    {/* Mark  */}
                    <div className="form-group">
                        <input type="text" className="form-control" id="mark" name="mark" aria-describedby="mark" placeholder="Mark"
                            value={contactMark}
                            onChange={(e) => setContactMark(e.target.value)} />
                    </div>

                    {/* Serial Number  */}
                    <div className="form-group">
                        <input type="text" className="form-control" id="serialNumber" name="serialNumber" aria-describedby="serialNumber" placeholder="Serial Number"
                            value={contactSerial}
                            onChange={(e) => setContactSerial(e.target.value)} />
                    </div>

                    {/* Status */}
                    <div className="form-group">
                        <select type="text" className="form-control" id="status" name="status" aria-describedby="status"
                            value={contactStatus}
                            onChange={(e) => setContactStatus(e.target.value)}>
                            <option disabled selected value=''>Select status</option>
                            <option value="newShip">Nuevo Barco</option>
                            <option value="waiting">Esperando Info</option>
                            <option value="compensating">En Compensación</option>
                            <option value="signing">Esperando Firma</option>
                            <option value="billing">En Facturacion</option>
                            <option value="closed">Cerrado</option>
                        </select>
                    </div>
                    <div className=' datePicker'>
                        <p style={{ color: '#858796', fontSize: 18 }}>Alert</p>
                        <DatePicker
                            selected={selectedDate}
                            onChange={(date) => setSelectedDate(date)}
                            dateFormat="dd/MM/yyyy"
                            className="form-control"
                            showIcon
                            fixedHeight
                            minDate={new Date()}
                        />

                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" style={{ fontSize: 16 }} onClick={closeModal}>
                    Close
                </Button>
                <Button style={styles.button} onClick={() => handleContactSubmit(contactID ? 'PUT' : 'POST')} >
                    {contactID ? 'Update' : 'Add'}
                </Button>
            </Modal.Footer>
        </Modal>
    );

    const modalEnterpriseContent = (
        <Modal
            show onHide={closeModal}
        >
            <Modal.Header closeButton>
                <Modal.Title style={styles.title}>Add Enterprise</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form id="enterpriseForm">
                    <div className="form-group">
                        <input type="text" className="form-control" id="name" name="name" aria-describedby="name" placeholder="Name"
                            value={enterpriseName}
                            onChange={(e) => setEnterpriseName(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control" id="country" name="country" aria-describedby="country" placeholder="Country"
                            value={enterpriseCountry}
                            onChange={(e) => setEnterpriseCountry(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control" id="phone" name="phone" aria-describedby="phone" placeholder="Phone Number"
                            value={enterpriseNumber}
                            onChange={(e) => setEnterpriseNumber(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control" id="adress" name="adress" aria-describedby="adress" placeholder="Adress"
                            value={enterpriseAdress}
                            onChange={(e) => setEnterpriseAdress(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <input type="email" className="form-control" id="email" name="email" aria-describedby="email" placeholder="Email"
                            value={enterpriseEmail}
                            onChange={(e) => setEnterpriseEmail(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control" id="cuit" name="cuit" aria-describedby="cuit" placeholder="Cuit"
                            value={enterpriseCuit}
                            onChange={(e) => setEnterpriseCuit(e.target.value)}
                        />
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button style={{ fontSize: 16 }} variant="secondary" onClick={closeModal}>
                    Close
                </Button>
                <Button style={styles.button} onClick={() => handleEnterpriseSubmit(enterpriseID ? 'PUT' : 'POST')} >
                    {enterpriseID ? 'Update' : 'Add'}
                </Button>
            </Modal.Footer>
        </Modal>
    );

    const modalHistoryContent = (
        <Modal
            show onHide={closeModal}
        >
            <Modal.Header closeButton>
                <Modal.Title style={styles.title}>History</Modal.Title>
            </Modal.Header>
            <Modal.Body className='historyCont'>
                <ul>
                    {history?.map((log, index) => (
                        <div key={`${index} - ${historyID} - ${log.date} - DATE`} >
                            <li>{log.message}</li>
                            <p>{log.date}</p>
                            <BsFillTrashFill color='#DB0035' onClick={e => handleHistoryDelete(e)} data-id={log.id} />
                        </div>
                    ))}
                </ul>
                <form>
                    <textarea id="historyContact"
                        value={historyMessage}
                        onChange={e => setHistoryMessage(e.target.value)}
                        onKeyDown={(event) => {
                            if (event.key === 'Enter' && !event.shiftKey) {
                                event.preventDefault();
                                handleHistorySubmit();
                            }
                        }}
                    />
                    <Button style={styles.button} onClick={handleHistorySubmit}>
                        Add
                    </Button>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" style={{ fontSize: 16 }} onClick={closeModal}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
    //#endregion

    return (
        <ModalContext.Provider value={{ openContactModal, openEnterpriseModal, openHistoryModal, closeModal }}>
            {children}
            {showShip && modalShipContent}
            {showEnterprise && modalEnterpriseContent}
            {showHistory && modalHistoryContent}

        </ModalContext.Provider>
    );
}

export { ModalContext, ModalProvider };

const styles = {
    title: {
        fontSize: 20,
        color: '#858796'
    },
    button: {
        fontSize: 16,
        backgroundColor: '#6A5BE2',
        borderColor: '#6A5BE2'
    }
}