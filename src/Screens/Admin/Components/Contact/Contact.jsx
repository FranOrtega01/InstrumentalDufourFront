import React, { useContext } from 'react'
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs'
import { ModalContext } from '../../../../Context/modalContext'
import Swal from 'sweetalert2'
import config from '../../../../config/config'


export const Contact = ({ update, contact }) => {

    const { openContactModal } = useContext(ModalContext);


    const handleUpdate = e => {
        e.stopPropagation()
        const parent = e.target.parentNode
        const id = parent.getAttribute('data-id')
        openContactModal(id)
    }

    const handleDelete = async e => {
        e.stopPropagation()
        const parent = e.target.parentNode
        const id = parent.getAttribute('data-id')
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${config.backURL}/api/admin/contact/${id}`, {
                    method: 'DELETE',
                    credentials: 'include'

                }).then(() => {
                    Swal.fire(
                        'Deleted!',
                        'Contact has been deleted.',
                        'success'
                    )
                    update()
                }).catch(() => {
                    Swal.fire(
                        'Error!',
                        'Couldnt delete contact.',
                        'error'
                    )
                })
            }

        })
    }

    const { name, enterprise, email, callSign, flag, _id } = contact
    return (
        <article className='contactViewCard col-12'>
            <p className="contactsView-name">Name: {name}</p>
            <p className="contactsView-enterprise">Enterprise: {enterprise}</p>
            <p className="contactsView-email">Email: <span>{email}</span></p>
            <p className="contactsView-callSign">Call Sign: {callSign}</p>
            <p className="contactsView-flag">Flag: {flag}</p>
            <div className="contactsView-btn">
                <div data-id={_id} >
                    <BsFillPencilFill data-id={_id} onClick={(e) => handleUpdate(e)} color='#3B38C6' />
                </div>
                <div data-id={_id} >
                    < BsFillTrashFill onClick={(e) => handleDelete(e)} data-id={_id} color='#DB0035' />
                </div>
            </div>
        </article>
    )
}