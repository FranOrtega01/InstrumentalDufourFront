import React from "react";
import './form.scss'

export const CustomForm = ({setValue}) => {

    const compasses = ['SAURA KEIKI', 'TOKIMEK INC', 'TOKYO KEIKI', 'OSAKA NUNOTANI SEIKI', 'SPERRY MARINE' , 'SARACOM', 'CASSENS & PLATH' , 'PLATH 2060', 'JOHN LILLEY & GUILLIE']
    compasses.sort()
    return(
        <>
            <form id="contactForm" className="card-form row">

                <div className="input">
                    <input type="text" className="input-field text-secondary" name="shipName" id="shipName"  required/>
                    <label className="input-label">Name of ship</label>
                </div>

                <div className="input">
                    <input type="text" className="input-field text-secondary" name="sailing"  required/>
                    <label className="input-label">Sailing at</label>
                </div>
                <div className="input">
                    <input type="text" className="input-field text-secondary" name="shipName"  required/>
                    <label className="input-label">Current Variation</label>
                </div>
                <select 
                name="compass"
                className="form-select"
                id="compassInput"
                onChange={e => setValue(e.target.value)}
                >
                    <option value="" disabled selected>Compass</option>
                    {compasses.map((compass, index) => <option key={`${index} - ${compass}`} value={compass}>{compass}</option>
                    )}
                </select>
            </form>
        </>
    )
}  