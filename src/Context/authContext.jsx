import React, { createContext, useState, useEffect } from 'react';
import config from '../config/config';
import { Loading } from '../Components/Loading/Loading'

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true)
    const [isLogged, setIsLogged] = useState(false);
    const [currentUser, setCurrentUser] = useState({})


    useEffect(() => {
        checkIsLogged();
    }, []);

    const checkIsLogged = async () => {
        try {
            const response = await fetch(`${config.backURL}/session/login`, {
                method: 'GET',
                credentials: 'include'
            })
            const json = await response.json()
            if (json.loggedIn) {
                setIsLogged(true)
                setCurrentUser(json.user)
            } else {
                setIsLogged(false)
            }
            setLoading(false)

        } catch (error) {
            setLoading(false)
        }
    };

    const login = async (data) => {
        try {
            setLoading(true)
            const response = await fetch(`${config.backURL}/session/login`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
                credentials: 'include',
                withCredentials: true,
            })
    
            if (response.ok) {
                setIsLogged(true)
            }
            setLoading(false)
            return response.ok
        } finally {
            setLoading(false)
        }
    }

    const logout = async () => {
        const response = await fetch(`${config.backURL}/session/logout`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
        })

        setIsLogged(false)

        return response.ok
    }

    return (
        <AuthContext.Provider value={{ checkIsLogged, login, logout, currentUser, isLogged }}>
            {loading ? (
                <Loading />
            ) : (
                children
            )}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };