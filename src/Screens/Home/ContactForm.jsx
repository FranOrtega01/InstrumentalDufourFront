import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { contactSchema } from '../../Validations/contact.validation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import config from '../../config/config';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';


export const ContactForm = () => {

    const [loading, setLoading] = useState(false)

    const { executeRecaptcha } = useGoogleReCaptcha();

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(contactSchema)
    });

    const onSubmit = async (data) => {
        try {
            if (!executeRecaptcha) {
                console.log('Execute recaptcha not yet available');
                return;
            }

            setLoading(true);

            const token = await executeRecaptcha()

            if (!token) {
                console.log('Captcha inválido');
                setLoading(false);
                return;
            }

            const response = await fetch(`${config.backURL}/send`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...data, token }),
            });

            const json = await response.json();
            notify(json.status, json.message);

            reset();
            setLoading(false);
        } catch (error) {
            setLoading(false);
            notify('error', 'Something went wrong! Please try again later or send an email manually.');
        }
    };

    const notify = (value, message) => {
        if (value === 'success') return toast.success(message, {
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
        return toast.error(message, {
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
    };

    return (
        <div className="col-xxl-8 col-xl-8 col-lg-10 col-12">
            <h3 className="text-center">Have any specific question?</h3>

            <div className="cardContact col-10 ">
                <form id="contactForm" className="card-form row" onSubmit={handleSubmit(onSubmit)}>

                    <div className="input col-sm-6 col-12" id="name">
                        <input {...register('name')} type="text"
                            className={`input-field text-secondary`}
                            name="name" />
                        <label className="input-label">Full name</label>
                        <p className='error'>{errors.name?.message}</p>
                    </div>

                    <div className="input col-sm-6 col-12" id="email">
                        <input type="email"
                            {...register('email')}
                            className={`input-field text-secondary`}
                            name="email"
                        />
                        <label className="input-label">Email</label>
                        <p className='error'>{errors.email?.message}</p>
                    </div>

                    <div className="input col-sm-6 col-12" id="number">
                        <input {...register('number')}
                            type="text"
                            className="input-field text-secondary"
                            name="number" />
                        <label className="input-label">Cellphone</label>
                        <p className='error'>{errors.number?.message}</p>
                    </div>

                    <div className="input col-sm-6 col-12" id="enterprise">
                        <input {...register('enterprise')} type="text"
                            className="input-field text-secondary"
                            name="enterprise" />
                        <label className="input-label">Enterprise</label>
                        <p className='error'>{errors.enterprise?.message}</p>
                    </div>

                    <div className="input col-12 col-sm-4 " id="subject">
                        <input {...register('subject')} type="text" name="subject"
                            className="input-field text-secondary"
                        />
                        <label className="input-label">Subject</label>
                        <p className='error'>{errors.subject?.message}</p>

                    </div>

                    <div className="input col-12" id="message">
                        <textarea {...register('message')}
                            className="input-field text-secondary"
                            name="message" ></textarea>
                        <label className="input-label">Message</label>
                        <p className='error'>{errors.message?.message}</p>
                    </div>

                    <div className="action col-12" id="submit">
                        <input type="submit" className="action-button" disabled={loading}
                            value={loading ? "Sending... Please wait." : "Send"}
                        />
                    </div>
                </form>
                <ToastContainer />
            </div>
        </div>
    )
}
