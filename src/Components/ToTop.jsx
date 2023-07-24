import React from 'react'
import { BsArrowUpShort } from 'react-icons/bs'

export const ToTop = () => {
    return (
        <div style={style} onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }}>
            <BsArrowUpShort style={{ fontSize: 48 }} />
        </div>
    )
}

const style = {
    position: 'fixed',
    bottom: 15,
    right: 15,
    cursor: 'pointer',
    background: 'white',
    borderRadius: '50%'
}