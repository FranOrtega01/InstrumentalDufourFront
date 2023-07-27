import React from "react";
import { SvgComponent as TokimekHeeling } from "./TokimekHeelings";
import { SvgComponent as TokimekFA } from "./TokimekFA";
import { SvgComponent as TokimekFlinders } from "./TokimekFlinders";
import { SvgComponent as TokimekAthwartship } from "./TokimekAth";
//Same as saura
import { SvgComponent as TokimekBoxesPort } from "../SauraKeiki/SauraBoxPort";
import { SvgComponent as TokimekBoxesStbd } from "../SauraKeiki/SauraBoxStbd";

export const TokimekContainer = () => {


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
        <div className="TokimekKeiki">
            <TokimekFA title="Fore and After Magnets" handleCircle={handleCircle} className='compassSvg foreAfter' />
            <TokimekHeeling title="Healings" className='compassSvg heelings' />
            <TokimekFlinders title='Flinders' handlePlate={handlePlate} className='compassSvg flinders' />
            <TokimekAthwartship title='Athwartships' handleCircle={handleCircle} className='compassSvg ath' />
            <TokimekBoxesPort title='Boxes Port' handlePlate={handlePlate} className='compassSvg boxes' />
            <TokimekBoxesStbd title='Boxes Stbd' handlePlate={handlePlate} className='compassSvg boxes' />
        </div>
    )
}





