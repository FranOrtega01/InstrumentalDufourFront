import React from 'react'
import { Contact } from './Contact'
export const ContactList = ({ update, contacts, ...props }) => {

    return (
        <section className='contactViewContainer'>
            {contacts?.map(contact => <Contact 
            key={contact._id} 
            contact={contact} 
            update={update}
            />)}
        </section>
    )
}
