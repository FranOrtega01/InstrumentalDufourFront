import React, { useState, useEffect } from 'react';
import './adminContainer.scss'
import { Sidebar } from './Components/Sidebar.jsx'
import { Routes, Route } from 'react-router-dom';
import { Dashboard } from './Components/Dashboard/Dashboard';
import { ContactContainer } from './Components/Contact/ContactContainer';
import { ModalProvider } from '../../Context/modalContext';
import { PrivateRoute } from '../../Components/PrivateRoute/PrivateRoute';

import { useLocalStorage } from '../../customHooks/useLocalStorage';

import { ToastContainer } from 'react-toastify';

import config from '../../config/config';

export const AdminContainer = () => {


    const [sidebarOpen, setSidebarOpen] = useLocalStorage('sidebar', true)
    const [contacts, setContacts] = useState([]);
    const [enterprises, setEnterprises] = useState([])


    const updateContacts = async () => {
        const response = await fetch(`${config.backURL}/api/admin/contact/all`, {
            credentials: 'include',

        })
        const json = await response.json()
        const newContacts = json.payload
        setContacts(newContacts);
    };

    const updateEnterprises = async () => {
        const response = await fetch(`${config.backURL}/api/admin/enterprise/all`, {
            credentials: 'include',

        })
        const json = await response.json()
        const newEnterprises = json.enterprises
        setEnterprises(newEnterprises);
    };

    useEffect(() => {
        document.title = 'Instrumental Dufour | Admin Dashboard';

        const fetchData = async () => {
            try {
                updateContacts()
                updateEnterprises()
            } catch{
            }
        }
        fetchData()
    }, [])

    return (
        <ModalProvider enterprises={enterprises} updateEnterprises={updateEnterprises} updateContacts={updateContacts}>
            <main className={sidebarOpen ? 'sidebarStatus active' : 'sidebarStatus'} >
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <Routes>
                    <Route path="/dashboard" element={<PrivateRoute to='/session/login'><Dashboard contacts={contacts} updateContacts={updateContacts} /></PrivateRoute>} />
                    <Route path="/contact" element={<PrivateRoute to='/session/login'><ContactContainer update={updateContacts} contacts={contacts} ContactContainer /></PrivateRoute>} />
                    <Route path="/enterprise" element={<PrivateRoute to='/session/login'><ContactContainer update={updateEnterprises} contacts={enterprises} /></PrivateRoute>} />
                </Routes>
            </main>
            <ToastContainer />
        </ModalProvider>
    )
}