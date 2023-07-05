import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export const Redirect = ({ to, message }) => {

    const [timer, setTimer] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            setTimer(true)
        }, 3000);
    }, [])


    return (
        timer ? navigate(to, { replace: true }) : <p>{message}</p>
    )
}
