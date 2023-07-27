import React, { useState, useContext, useEffect } from 'react'
import './Login.scss'

import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import { loginSchema } from '../../Validations/login.validation';

import { SessionContainer } from './SessionContainer';
import { FormTextInput } from '../PreService/Components/Form/FormTextInput';

import { AuthContext } from '../../Context/authContext';

export const Login = () => {

    const { login } = useContext(AuthContext);

    const [loading, setLoading] = useState(false)

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema)
    });

    useEffect(() => {
        document.title = 'Instrumental Dufour | Log In';
    }, []);


    const onSubmit = async (data) => {
        setLoading(true)
        try {
            const loginSuccessful = await login(data);
            if (loginSuccessful) {
                navigate('/admin/dashboard');
            }
        }finally {
            setLoading(false)
        }
    }

    return (
        <SessionContainer>
            <h2 className='text-center'>Login</h2>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormTextInput register={register} label={'Email'} name={'email'} errors={errors} type={'email'} />
                    <FormTextInput register={register} label={'Password'} name={'password'} errors={errors} type={'password'} />
                    <div className="action col-12 m-0 py-4" id="login-submit">
                        <input
                            type="submit"
                            value={loading ? "Sending... Please wait." : "Send"}
                            className="action-button w-100"
                            disabled={loading}
                        />
                    </div>
                </form>
            </div>
        </SessionContainer>
    )
}
