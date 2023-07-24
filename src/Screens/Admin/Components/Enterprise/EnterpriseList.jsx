import React from 'react'
import { Enterprise } from './Enterprise'
export const EnterpriseList = ({ update, enterprise, ...props }) => {


    return (
        <section className='contactViewContainer'>
            {enterprise?.map(enterprise => <Enterprise 
            key={enterprise._id} 
            enterprise={enterprise} 
            update={update}
            />)}
        </section>
    )
}
