import React, { useState, useEffect } from 'react';
import './adminContainer.scss'
import { Sidebar } from './Components/Sidebar.jsx'
import { Routes, Route } from 'react-router-dom';
import { Dashboard } from './Components/Dashboard/Dashboard';
import { ContactContainer } from './Components/Contact/ContactContainer';

export const AdminContainer = () => {

    const [sidebarOpen, setSidebarOpen] = useState(true)

return (
    <main className={sidebarOpen ? 'sidebarStatus active' : 'sidebarStatus'} >
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/contact" element={<ContactContainer contact />} />
            <Route path="/enterprise" element={<ContactContainer />} />
        </Routes>
    </main>
)
}