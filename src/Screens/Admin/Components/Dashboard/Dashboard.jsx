import React from 'react'
import { FlowContainer } from './FlowContainer/FlowContainer'
import {AlertContainer} from './AlertContainer/AlertContainer'

export const Dashboard = () => {
    return (
        <section className='adminBody'>
            <header className='shadow'>
                <h2>Dashboard</h2>
                <p>Alfonso Velero</p>
            </header>
            <AlertContainer/>
            <FlowContainer/>
        </section>
    )
}
