import React, {useState, useEffect} from 'react';
import './adminContainer.scss'
import {Sidebar} from './Components/Sidebar.jsx'
import { AdminBody } from './Components/AdminBody.jsx'


export const AdminContainer = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <main className={sidebarOpen ? 'sidebarStatus active' : 'sidebarStatus'} >
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
            <AdminBody />
        </main>
    )
}