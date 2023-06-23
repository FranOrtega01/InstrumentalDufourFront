import React from "react";
import './form.scss'
import { FormTextInput } from "./FormTextInput";
import { Record } from '../Record/Record'


export const CustomForm = ({ changeHandler, recordRef }) => {

    const compasses = ['SAURA KEIKI', 'TOKIMEK INC', 'TOKYO KEIKI', 'OSAKA NUNOTANI SEIKI', 'SPERRY MARINE', 'SARACOM', 'CASSENS & PLATH', 'PLATH 2060', 'JOHN LILLEY & GUILLIE', 'OTHER']
    return (
        <>
            <form id="contactForm" className="card-form row">


                {/* Ships name */}
                <FormTextInput label={"Ship's name"} name={'shipName'} changeHandler={changeHandler} />

                {/* Magnetic Compass  */}
                <select
                    name="compass"
                    className="form-select"
                    id="magneticCompass"
                    onChange={e => changeHandler(e)}
                >
                    <option value="" disabled selected>Magnetic Compass</option>
                    <option value="Standard" >Standard</option>
                    <option value="Spare" >Spare</option>
                </select>

                {/* Sailing at */}
                <FormTextInput label={"Sailing at"} name={'sailing'} changeHandler={changeHandler} />

                {/* <h3>Position</h3> */}

                {/* Longitude */}
                <FormTextInput label={"Longitude"} name={'long'} changeHandler={changeHandler} />

                {/* Latitude */}
                <FormTextInput label={"Latitude"} name={'lat'} changeHandler={changeHandler} />

                {/* Model */}
                <FormTextInput label={"Model"} name={'model'} changeHandler={changeHandler} />

                {/* Serial Number */}
                <FormTextInput label={"Serial Number"} name={'serial'} changeHandler={changeHandler} />

                {/* Current Variation */}
                <FormTextInput label={"Current Variaton"} name={'currentVariation'} changeHandler={changeHandler} />

                <Record recordRef={recordRef}/>

                {/* Compass */}

                <select
                    name="mark"
                    className="form-select"
                    id="compassInput"
                    onChange={e => changeHandler(e)}
                >
                    <option value="" disabled selected>Trade Mark</option>
                    {compasses.map((compass, index) => <option key={`${index} - ${compass}`} value={compass}>{compass}</option>
                    )}
                </select>
            </form>
        </>
    )
}  