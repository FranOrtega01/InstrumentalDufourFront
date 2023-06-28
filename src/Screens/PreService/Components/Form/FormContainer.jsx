import React from "react";
import { FormTextInput } from "./FormTextInput";
import { Record } from '../Record/Record'


export const CustomForm = ({ errors, register, recordRef }) => {

    const compasses = ['SAURA KEIKI', 'TOKIMEK INC', 'TOKYO KEIKI', 'OSAKA NUNOTANI SEIKI', 'SPERRY MARINE', 'SARACOM', 'CASSENS & PLATH', 'PLATH 2060', 'JOHN LILLEY & GUILLIE', 'OTHER']
    return (
        <>
            <article className="card-form row">

                {/* Ships name */}
                <FormTextInput errors={errors} className={'col-6'} label={"Ship's name"} name={'shipName'} register={register} />

                {/* Magnetic Compass  */}
                <select
                    name="compass"
                    className="form-select"
                    id="magneticCompass"
                    {...register('compass')}
                >
                    <option value="" disabled selected>Magnetic Compass</option>
                    <option value="Standard" >Standard</option>
                    <option value="Spare" >Spare</option>
                </select>

                {/* Sailing at */}
                <FormTextInput errors={errors} className={'col-6'} label={"Sailing at"} name={'sailing'} register={register} />

                <FormTextInput errors={errors} className={'col-6'} label={"Current Variaton"} name={'currentVariation'} register={register} />

                {/* Longitude */}
                <FormTextInput errors={errors} className={'col-6'} label={"Longitude"} name={'long'} register={register} />

                {/* Latitude */}
                <FormTextInput errors={errors} className={'col-6'} label={"Latitude"} name={'lat'} register={register} />

                {/* Model */}
                <FormTextInput errors={errors} className={'col-6'} label={"Model"} name={'model'} register={register} />

                {/* Serial Number */}
                <FormTextInput errors={errors} className={'col-6'} label={"Serial Number"} name={'serial'} register={register} />

                {/* Current Variation */}

                <Record recordRef={recordRef}/>

                {/* Compass */}

                <select
                    name="mark"
                    className="form-select"
                    id="compassInput"
                    {...register('mark')}
                >
                    <option value="" disabled selected>Trade Mark</option>
                    {compasses.map((compass, index) => <option key={`${index} - ${compass}`} value={compass}>{compass}</option>
                    )}
                </select>
            </article>
        </>
    )
}  