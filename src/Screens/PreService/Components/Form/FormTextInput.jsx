import React from 'react'

export const FormTextInput = ({label, name, changeHandler}) => {
    return (
    <div className="input">
        <input onChange={e => changeHandler(e)} type="text" className="input-field text-secondary" name={name} id={name}  required/>
        <label className="input-label">{label}</label>
    </div>
    )
}
