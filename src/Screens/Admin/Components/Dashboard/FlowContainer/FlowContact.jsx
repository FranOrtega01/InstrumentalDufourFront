import React from 'react'
import { BsFillClipboardFill, BsFillPencilFill } from 'react-icons/bs'

export const FlowContact = ({ contact }) => {

    const { name, enterprise, mmsi, mark, id } = contact
    
    return (
        <div className='flowContactCard'>
            <p className='flowContact-name'>{name}</p>
            <p className='flowContact-enterprise'>{enterprise}</p>
            <p className='flowContact-mark'>{mark}</p>
            <p className='flowContact-mmsi'>{mmsi}</p>
            <div className="flowContact-btn">
                <div data-id={id} >
                    <BsFillPencilFill color='#3B38C6'/>
                </div>
                <div data-id={id}>
                    <BsFillClipboardFill color='#ff7b00'/>
                </div>
            </div>
        </div>
    )
}
