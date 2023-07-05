import React from 'react'
import { Enterprise } from './Enterprise'
export const EnterpriseList = ({ enterprise, ...props }) => {


    return (
        <section className='contactViewContainer'>
            {enterprise.map(enterprise => <Enterprise key={enterprise._id} enterprise={enterprise} />)}
        </section>
    )
}
