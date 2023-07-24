import React, { useState } from "react";
import { SvgComponent as LilleyFAPort } from "./LilleyFAPort.jsx";
import { SvgComponent as LilleyHeeling } from "./LilleyHeelings.jsx";
import { SvgComponent as LilleyFlinders } from "./LilleyFlinders";
import { SvgComponent as LilleyBoxPort } from './LilleyBoxPort';
import { SvgComponent as LilleyBoxStbd } from "./LilleyBoxStbd";
import { SvgComponent as LilleySoftPort } from "./LilleySoftPort.jsx";
import { SvgComponent as LilleySoftStbd } from "./LilleySoftStbd.jsx";

export const LilleyContainer = () => {

    const [value, setValue] = useState('')

    const renderBoxSoft = value => {
        switch (value) {
            case 'Boxes':
                return <>
                    <LilleyBoxPort title='PORTBOARD MAGNETS' handlePlate={handlePlate} className='compassSvg boxes' />
                    <LilleyBoxStbd title='STARBOARD MAGNETS' handlePlate={handlePlate} className='compassSvg boxes' />
                </>
            case 'Soft':
                return <>
                    <LilleySoftPort title='PORTBOARD MAGNETS' handlePlate={handlePlate} className='compassSvg boxes' />
                    <LilleySoftStbd title='STARBOARD MAGNETS' handlePlate={handlePlate} className='compassSvg boxes' />
                </>
            default:
                break;
        }
    }

    const changeCircleColor = (event, value) => {
        let e = event.target || event
        switch (value) {
            case 1:
                e.style.fill = '#e62e1e'
                break;

            case 2:
                e.style.fill = '#531ee6'
                break;

            default:
                e.style.fill = '#fff'
                break;
        }
    }

    const changePlateColor = (e, value) => {

        switch (value) {
            case 1:
                e.target.style.fill = '#000'
                break;

            default:
                e.target.style.fill = '#fff'
                break;
        }
    }

    const handlePlate = (e) => {
        let value = Number(e.target.getAttribute('data-value'))

        if (!value) e.target.setAttribute('data-value', 0)

        value === 1 ? value = 0 : value++

        e.target.setAttribute('data-value', value)

        changePlateColor(e, value)
    }

    const handleCircle = (e) => {
        let value = Number(e.target.getAttribute('data-value'))

        if (!value) e.target.setAttribute('data-value', 0)

        value === 2 ? value = 0 : value++

        e.target.setAttribute('data-value', value)

        changeCircleColor(e, value)
    }

    return (
        <div className="Lilley">
            <LilleyFAPort title="Fore and After Magnets" handleCircle={handleCircle} changeCircleColor={changeCircleColor} className='compassSvg big foreAfter' />
            <LilleyHeeling title="Heelings" className='compassSvg heelings' />
            <LilleyFlinders title='Flinders' className='compassSvg flinders' />
            <select style={{ width: '300px' }} className="form-select" onChange={e => setValue(e.target.value)}>
                <option value="" disabled selected>Select a quadrantal corrector</option>
                <option value="Boxes">Boxes</option>
                <option value="Soft">Soft</option>
            </select>
            {renderBoxSoft(value)}

        </div>
    )
}
