import React from 'react'

export const FormTextInput = ({label, name, errors, register, ...props}) => {
    return (
    <div className={`input ${props.className}`}>
        <input {...register(name)} type={props.type ? props.type : 'text'} className="input-field text-secondary" name={name} id={name}/>
        <label className="input-label">{label}</label>
        <p className='error'>{errors[name]?.message}</p>
    </div>
    )
}
