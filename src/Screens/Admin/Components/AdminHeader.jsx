import React, { useContext } from 'react'
import './AdminHeader.scss'
import { BsPersonCircle } from 'react-icons/bs'
import { AuthContext } from '../../../Context/authContext'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const AdminHeader = ({ children }) => {

    const navigate = useNavigate();


    const { currentUser, logout } = useContext(AuthContext)

    const handleLogout = async () => {
        const loginSuccessful = await logout();
        if (loginSuccessful) {
            navigate('/session/login');
        } else {
            return toast.error("Couldnt logout please refresh", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: 0,
                theme: "light",
                style: {
                    fontSize: '18px'
                }
            })
        }
    }
    return (
        <>
            <header className='adminHeader shadow'>
                <div className='adminHeader-title'>
                    {children}
                </div>
                <div className='adminHeader-session'>
                    <p>{currentUser?.name || ''}</p>
                    <BsPersonCircle onClick={handleLogout} />
                </div>
            </header>
        </>
    )
}
