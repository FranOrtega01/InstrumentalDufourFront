import React from 'react'
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs'


export const Contact = ({ contact }) => {
    const { name, enterprise, email, callSign, flag, _id } = contact
    return (
        <article className='contactViewCard col-12'>
            <p className="contactsView-name">Name: { name }</p>
            <p className="contactsView-enterprise">Enterprise: {enterprise }</p>
            <p className="contactsView-email">Email: <span>{ email }</span></p>
            <p className="contactsView-callSign">Call Sign: { callSign }</p>
            <p className="contactsView-flag">Flag: { flag }</p>
            <div className="contactsView-btn">
                <div data-id={_id}>
                    < BsFillPencilFill color='#3B38C6'/>
                </div>
                <div data-id={_id}>
                    < BsFillTrashFill color='#DB0035'/>
                </div>
            </div>
        </article>
    )
}