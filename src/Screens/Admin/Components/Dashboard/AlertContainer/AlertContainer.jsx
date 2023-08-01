import React, { useRef } from 'react'
import './Alert.scss'
import { Alert } from './Alert'


export const AlertContainer = ({ contacts, updateContacts }) => {

    const alertContRef = useRef(null);

    const handleScroll = (e) => {
        const scrollAmount = e.deltaY < 0 ? -60 : 60;
        alertContRef.current.scrollLeft += scrollAmount;
    };

    const filteredAlerts = []

    // getMonth - 1
    const getMonthLessOne = (date) => {
        let currentMonth = date.getMonth();

        currentMonth -= 1;

        if (currentMonth < 0) {
            date.setFullYear(date.getFullYear() - 1);
            currentMonth = 11;
        }

        date.setMonth(currentMonth);

        return date;
    }

    const isInRange = (startDate, targetDate) => {
        return startDate <= targetDate
    }

    const filterAlerts = (contacts) => {
        contacts?.forEach(contact => {
            const date = new Date()
            const clonedDate = new Date(contact.alerts[0]?.date);

            const clonedDateLessOne = getMonthLessOne(clonedDate)

            if (isInRange(clonedDateLessOne, date)) filteredAlerts.push(contact)
        })
    }

    filterAlerts(contacts)

    return (
        <section className='alertCont' onWheel={handleScroll} ref={alertContRef}>
            {filteredAlerts?.map((contact, index) => <Alert updateContacts={updateContacts} contact={contact} key={`${index} - ${contact.name} - Alerts`} />)}
        </section>
    )
}

