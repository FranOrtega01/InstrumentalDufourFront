import React,{useEffect, useContext } from 'react'
import { FlowContainer } from './FlowContainer/FlowContainer'
import { AlertContainer } from './AlertContainer/AlertContainer'
import { AdminHeader } from '../AdminHeader'
import { AuthContext } from '../../../../Context/authContext'

export const Dashboard = ({ contacts, updateContacts }) => {

    const { checkIsLogged} = useContext(AuthContext)


    useEffect(() => {
        checkIsLogged()
    }, []);

    return (
        <>
            <section className='body adminBody'>
                <AdminHeader> <h2>Dashboard</h2></AdminHeader>
                <AlertContainer updateContacts={updateContacts} contacts={contacts}/>
                <FlowContainer contacts={contacts} />
            </section>
        </>
    )
}
