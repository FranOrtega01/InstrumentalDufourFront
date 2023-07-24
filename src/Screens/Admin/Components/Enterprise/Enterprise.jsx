import React, { useContext } from 'react'
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs'
import { ModalContext } from '../../../../Context/modalContext'
import Swal from 'sweetalert2'
import config from '../../../../config/config'


export const Enterprise = ({ update, enterprise }) => {


    const { openEnterpriseModal } = useContext(ModalContext);

    const { name, cuit, email, phone, country, _id } = enterprise

    const handleUpdate = e => {
        e.stopPropagation()
        const parent = e.target.parentNode
        const id = parent.getAttribute('data-id')
        openEnterpriseModal(id)
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
                fetch(`${config.backURL}/api/admin/enterprise/${id}`,{
                    method: 'DELETE'
                }).then(() => {
                    Swal.fire(
                        'Deleted!',
                        'Enterprise has been deleted.',
                        'success'
                    )
                    update()
                }).catch(() => {
                    Swal.fire(
                        'Error!',
                        'Couldnt delete enterprise.',
                        'error'
                    ) 
                })
            }

        })
    }

    return (
        <article className='contactViewCard col-12'>
            <p className="contactsView-name">Name: {name}</p>
            <p className="contactsView-enterprise">Cuit: {cuit}</p>
            <p className="contactsView-email">Email: <span>{email}</span></p>
            <p className="contactsView-callSign">Phone: {phone}</p>
            <p className="contactsView-flag">Flag: {country}</p>
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