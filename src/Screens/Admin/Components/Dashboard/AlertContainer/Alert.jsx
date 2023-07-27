import React from 'react'
import { BsFillXCircleFill } from 'react-icons/bs'
import config from '../../../../../config/config'
import { toast } from 'react-toastify';

export const Alert = ({ contact, updateContacts }) => {

    const { name, email, alerts, _id } = contact


    const formatDateToLocaleDateString = (dateString) => {
        const date = new Date(dateString);
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return date.toLocaleDateString('es-ES', options);
    }

    const handleDelete = async e => {
        const el = e.target.closest('svg');
        const id = el.getAttribute('data-id');
        const date = el.getAttribute('data-date');
        try {
            const response = await fetch(`${config.backAPI}/contact/${id}/alert`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ date }),
                credentials: 'include',

            })
            if (response.ok) {
                updateContacts()
            }else{
                return toast.error("Couldnt delete alert", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: 0,
                    theme: "light",
                    style: {
                        fontSize: '18px'
                    }
                })
            }
        } catch (error) {
            return toast.error("Server error please try again later", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: 0,
                theme: "light",
                style: {
                    fontSize: '18px'
                }
            })
        }
    }

    return (
        <article className='shadow'>
            <h3 style={styles.title}>{name}</h3>
            <p style={styles.email}>{email}</p>
            <p style={styles.date}>{formatDateToLocaleDateString(alerts[0]?.date)}</p>
            <p>{alerts[0]?.message}</p>
            <BsFillXCircleFill data-id={_id} data-date={alerts[0]?.date} onClick={handleDelete} />
        </article>
    )

}

const styles = {
    title: {
        textTransform: 'uppercase',
    },
    email: {
        color: '#fa9696',
        fontSize: 14,
        textTransform: 'lowercase'
    },
    date: {
        fontSize: 14
    },
}