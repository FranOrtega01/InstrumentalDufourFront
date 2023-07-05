import React from 'react'
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs'


export const Enterprise = ({ enterprise }) => {
    const { name, cuit, email, phone, country, _id } = enterprise
    return (
        <article className='contactViewCard col-12'>
            <p className="contactsView-name">Name: { name }</p>
            <p className="contactsView-enterprise">Cuit: {cuit }</p>
            <p className="contactsView-email">Email: <span>{ email }</span></p>
            <p className="contactsView-callSign">Phone: { phone }</p>
            <p className="contactsView-flag">Flag: { country }</p>
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