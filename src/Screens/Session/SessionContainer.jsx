import React from 'react'

export const SessionContainer = ({ children }) => {
    return (
        <section className='loginSection '>
            <div className='loginCont row shadow'>
                {children}
            </div>
        </section>
    )   
}
