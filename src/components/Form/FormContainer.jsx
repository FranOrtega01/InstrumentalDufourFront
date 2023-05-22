import React from "react";
import './form.scss'

export const CustomForm = ({setMark, setModel, setSerial, setCompass, setName, setSailing, setCurrentVariation }) => {

    const compasses = ['SAURA KEIKI', 'TOKIMEK INC', 'TOKYO KEIKI', 'OSAKA NUNOTANI SEIKI', 'SPERRY MARINE' , 'SARACOM', 'CASSENS & PLATH' , 'PLATH 2060', 'JOHN LILLEY & GUILLIE', 'OTHER']
    return(
        <>
            <form id="contactForm" className="card-form row">

                <div className="input">
                    <input onChange={e => setName(e.target.value)} type="text" className="input-field text-secondary" name="shipName" id="shipName"  required/>
                    <label className="input-label">Ship's name</label>
                </div>

                {/* Magnetic Compass  */}
                <select 
                name="magneticCompass"
                className="form-select"
                id="magneticCompass"
                onChange={e => setCompass(e.target.value)}
                >
                    <option value="" disabled selected>Magnetic Compass</option>
                    <option value="Standard" >Standard</option>
                    <option value="Spare" >Spare</option>                    
                </select>

                <div className="input">
                    <input onChange={e => setSailing(e.target.value)} type="text" className="input-field text-secondary" name="sailing"  required/>
                    <label className="input-label">Sailing at</label>
                </div>

                <div className="input">
                    <label className="input-label">Position</label>
                </div>
                <div className="input">

                <input onChange={e => setSerial(e.target.value)} type="text" className="input-field text-secondary" name="long" placeholder="Longitude"  required/>

                <input onChange={e => setSerial(e.target.value)} type="text" className="input-field text-secondary" name="lat" placeholder="Latitude"  required/>
                </div>

                <div className="input">
                    <input onChange={e => setModel(e.target.value)} type="text" className="input-field text-secondary" name="sailing"  required/>
                    <label className="input-label">Model</label>
                </div>

                <div className="input">
                    <input onChange={e => setSerial(e.target.value)} type="text" className="input-field text-secondary" name="serialNumber"  required/>
                    <label className="input-label">Serial Number</label>
                </div>

                <div className="input">
                    <input onChange={e => setCurrentVariation(e.target.value)} type="text" className="input-field text-secondary" name="shipName"  required/>
                    <label className="input-label">Current Variation</label>
                </div>
                <select 
                name="compass"
                className="form-select"
                id="compassInput"
                onChange={e => setMark(e.target.value)}
                >
                    <option value="" disabled selected>Trade Mark</option>
                    {compasses.map((compass, index) => <option key={`${index} - ${compass}`} value={compass}>{compass}</option>
                    )}
                </select>
            </form>
        </>
    )
}  