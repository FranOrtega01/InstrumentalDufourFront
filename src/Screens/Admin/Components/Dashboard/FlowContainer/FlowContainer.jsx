import React, { useState, useEffect, useRef } from 'react'
import { FlowList } from './FlowList.jsx'
export const FlowContainer = ({ contacts }) => {

    const [newShip, setNewShip] = useState([])
    const [waiting, setWaiting] = useState([])
    const [compensating, setCompensating] = useState([])
    const [signing, setSigning] = useState([])
    const [billing, setBilling] = useState([])

    const [error, setError] = useState(false)


    const flowContRef = useRef(null);

    const handleScroll = (e) => {
        e.preventDefault();
        const scrollAmount = e.deltaY < 0 ? -60 : 60;
        flowContRef.current.scrollLeft += scrollAmount;
    };


    useEffect(() => {
        setError('')
        // Filtrar los contactos por estado y asignarlos a los estados correspondientes
        try {
            const newShipContacts = contacts.filter(contact => contact.status === 'newShip');
            const waitingContacts = contacts.filter(contact => contact.status === 'waiting');
            const compensatingContacts = contacts.filter(contact => contact.status === 'compensating');
            const signingContacts = contacts.filter(contact => contact.status === 'signing');
            const billingContacts = contacts.filter(contact => contact.status === 'billing');

            // Asignar los contactos filtrados a los estados correspondientes
            setNewShip(newShipContacts);
            setWaiting(waitingContacts);
            setCompensating(compensatingContacts);
            setSigning(signingContacts);
            setBilling(billingContacts);

        } catch (error) {
            setError('Something went wrong fetching contacts. Please refresh.')
        }

    }, [contacts])



    return (
        <section className='flowCont' onWheel={handleScroll} ref={flowContRef}>
            {error ? <p>{error} </p> :
                (<>
                    <FlowList title={'Nuevo Barco'} contacts={newShip} />
                    <FlowList title={'Esperando Info'} contacts={waiting} />
                    <FlowList title={'En Compensación'} contacts={compensating} />
                    <FlowList title={'Esperando Firma'} contacts={signing} />
                    <FlowList title={'En Facturación'} contacts={billing} />
                    <FlowList title={'Cerrado'} contacts={[]} />
                </>
                )
            }
        </section>
    )
}
