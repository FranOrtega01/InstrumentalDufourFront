import React from "react";
import { SvgComponent as OsakaHeeling } from "./OsakaHeelings";
import { SvgComponent as OsakaFA } from "./OsakaFA";
import { SvgComponent as OsakaBoxPort } from './OsakaBoxPort';
import { SvgComponent as OsakaBoxStbd } from "./OsakaBoxStbd";
import { SvgComponent as OsakaFlinders } from "./OsakaFlinders";
import { SvgComponent as OsakaAth } from "./OsakaAth";

export const OsakaContainer = () => {

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
        <div className="OsakaNunotani">
            <OsakaFA title="Fore and After Magnets" handleCircle={handleCircle} className='compassSvg foreAfter' />
            <OsakaHeeling title="Heelings" className='compassSvg heelings' />
            <OsakaFlinders title='Flinders' handlePlate={handlePlate} className='compassSvg flinders' />
            <OsakaAth title='Athwartships' handleCircle={handleCircle} className='compassSvg ath' />
            <OsakaBoxPort title='PORTBOARD MAGNETS' handlePlate={handlePlate} className='compassSvg boxes' />
            <OsakaBoxStbd title='STARBOARD MAGNETS' handlePlate={handlePlate} className='compassSvg boxes' />
        </div>
    )
}
