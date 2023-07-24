import React, { useContext } from 'react'
import './AdminHeader.scss'
import { BsPersonCircle } from 'react-icons/bs'
import { AuthContext } from '../../../Context/authContext'
import { useNavigate } from 'react-router-dom'

export const AdminHeader = ({ children }) => {

    const navigate = useNavigate();


    const { currentUser, logout } = useContext(AuthContext)

    const handleLogout = async () => {
        console.log('click');
        const response = await logout()

        response && navigate('/session/login')
    }


    return (
        <header className='adminHeader shadow'>
            <div className='adminHeader-title'>
                {children}
            </div>
            <div className='adminHeader-session'>
                <p>{currentUser?.name || ''}</p>
                <BsPersonCircle onClick={handleLogout} />
            </div>
        </header>
    )
}
