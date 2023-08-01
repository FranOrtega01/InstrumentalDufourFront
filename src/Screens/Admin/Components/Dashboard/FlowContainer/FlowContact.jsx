import React, { useContext, useEffect } from 'react'
import { BsFillClipboardFill, BsFillPencilFill } from 'react-icons/bs'
import { ModalContext } from '../../../../../Context/modalContext'
import { AuthContext } from '../../../../../Context/authContext'

export const FlowContact = ({ contact }) => {

    const { openContactModal, openHistoryModal } = useContext(ModalContext);
    const { currentUser } = useContext(AuthContext)
    const { name, enterprise, mmsi, mark, _id, createdBy } = contact
    const handleUpdate = e => {
        e.stopPropagation()
        const parent = e.target.parentNode
        const id = parent.getAttribute('data-id')
        openContactModal(id)
    }

    const handleHistory = e => {
        e.stopPropagation()
        const parent = e.target.parentNode
        const id = parent.getAttribute('data-id')
        openHistoryModal(id)
    }

    return (
        <div className='flowContactCard shadow'>
            <p className='flowContact-created'>{createdBy || 'Jean Marc'}</p>
            <p className='flowContact-name'>{name}</p>
            <p className='flowContact-enterprise'>{enterprise}</p>
            <p className='flowContact-mark'>{mark}</p>
            <p className='flowContact-mmsi'>{mmsi}</p>
            {currentUser.role === 'admin' && (
                <>
                    <div className="flowContact-btn">
                        <div data-id={_id} >
                            <BsFillPencilFill data-id={_id}
                                onClick={(e) => handleUpdate(e)} color='#3B38C6' />
                        </div>
                        <div data-id={_id}>
                            <BsFillClipboardFill color='#ff7b00' data-id={_id}
                                onClick={(e) => handleHistory(e)}
                            />
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}
