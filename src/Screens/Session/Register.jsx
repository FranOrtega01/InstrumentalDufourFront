import React, { useState } from 'react'
import './Login.scss'

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import { registerSchema } from '../../Validations/register.validation';
import config from '../../config/config';

import { SessionContainer } from './SessionContainer';
import { FormTextInput } from '../PreService/Components/Form/FormTextInput';

export const Register = () => {

    const [loading, setLoading] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(registerSchema)
    });

    const onSubmit = async (data) => {
        setLoading(true)
        try {
            console.log(data);
            const response = await fetch(`${config.backURL}/session/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
    
            const json = await response.json()
    
            console.log(json);
        } catch (error) {
            console.log(error);
        } finally{
            setLoading(false)
        }
    }

    return (
        <SessionContainer>
            <h2 className='text-center'>Register</h2>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormTextInput register={register} label={'Name'} name={'name'} errors={errors} />
                    <FormTextInput register={register} label={'Email'} name={'email'} errors={errors} />
                    <FormTextInput register={register} label={'Role'} name={'role'} errors={errors} />
                    <FormTextInput register={register} label={'Password'} name={'password'} errors={errors} />
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
