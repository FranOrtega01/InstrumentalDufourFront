import React,{useEffect, useContext } from 'react'
import { FlowContainer } from './FlowContainer/FlowContainer'
import { AlertContainer } from './AlertContainer/AlertContainer'
import { AdminHeader } from '../AdminHeader'
import { AuthContext } from '../../../../Context/authContext'

export const Dashboard = ({ contacts }) => {

    const {isLogged, checkIsLogged} = useContext(AuthContext)


    useEffect(() => {
        checkIsLogged()
    }, [isLogged, checkIsLogged]);

    return (
        <>
            <section className='body adminBody'>
                <AdminHeader> <h2>Dashboard</h2></AdminHeader>
                <AlertContainer />
                <FlowContainer contacts={contacts} />
            </section>
        </>
    )
}
