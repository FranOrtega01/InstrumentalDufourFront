import React from 'react'
import './terms.scss'

export const TermsContainer = ({ children }) => {
    return (
        <section id='terms' className='container justify-content-center col-11 col-lg-8 col-md-10'>
            <div>
                {children}
            </div>
        </section>
    )
}
