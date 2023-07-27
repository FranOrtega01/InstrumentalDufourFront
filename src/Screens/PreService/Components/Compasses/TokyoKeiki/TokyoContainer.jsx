import React from "react";
import { SvgComponent as TokyoHeeling } from "../Tokimek/TokimekHeelings";
import { SvgComponent as TokyoFA } from "../Tokimek/TokimekFA";
import { SvgComponent as TokyoFlinders } from "../Tokimek/TokimekFlinders";
import { SvgComponent as TokyoAthwartship } from "../Tokimek/TokimekAth";
//Same as saura
import { SvgComponent as TokyoBoxesPort } from "../SauraKeiki/SauraBoxPort";
import { SvgComponent as TokyoBoxesStbd } from "../SauraKeiki/SauraBoxStbd";

export const TokyoContainer = () => {

    const changeCircleColor = (e, value) => {

        switch (value) {
            case 1:
                e.target.style.fill = '#e62e1e'
                break;

            case 2:
                e.target.style.fill = '#531ee6'
                break;
            default:
                e.target.style.fill = '#fff'
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
        <div className="TokyoKeiki">
            <TokyoFA title="Fore and After Magnets" handleCircle={handleCircle} className='compassSvg foreAfter' />
            <TokyoHeeling title="Healings" className='compassSvg heelings' />
            <TokyoFlinders title='Flinders' handlePlate={handlePlate} className='compassSvg flinders' />
            <TokyoAthwartship title='Athwartships' handleCircle={handleCircle} className='compassSvg ath' />
            <TokyoBoxesPort title='Boxes Port' handlePlate={handlePlate} className='compassSvg boxes' />
            <TokyoBoxesStbd title='Boxes Stbd' handlePlate={handlePlate} className='compassSvg boxes' />
        </div>
    )
}

