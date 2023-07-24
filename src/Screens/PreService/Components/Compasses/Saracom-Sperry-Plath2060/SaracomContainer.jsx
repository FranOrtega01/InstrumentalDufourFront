import React from "react";
import { SvgComponent as SaracomHeeling } from "./SaracomHeelings";
import { SvgComponent as SaracomFA } from "./SaracomFA";
import { SvgComponent as SaracomBoxesPort } from "./SaracomBoxPort";
import { SvgComponent as SaracomBoxesStbd } from "./SaracomBoxStbd";
import { SvgComponent as SaracomFlinders } from "./SaracomFlinders";
import { SvgComponent as SaracomAthwartship } from "./SaracomAth";

export const SaracomContainer = () => {

    const changeCircleColor = (e, value) => {

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
                e.style.fill = '#000'
                break;
            default:
                e.style.fill = '#fff'
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

        changeCircleColor(e.target, value)
    }

    const handleAthMagnet = e => {
        const node = e.target.parentNode
        const children = [...node.children]
        children.forEach(child => {
            let value = Number(e.target.getAttribute('data-value'))

            if (!value) child.setAttribute('data-value', 0)

            value === 2 ? value = 0 : value++

            child.setAttribute('data-value', value)

            changeCircleColor(child, value)
        });
    }

    return (
        <div className="Saracom">
            <SaracomFA title="Fore and After Magnets" handleCircle={handleCircle} className='compassSvg foreAfter' />
            <SaracomHeeling title="Healings" className='compassSvg heelings' />
            <SaracomFlinders title='Flinders' handlePlate={handlePlate} className='compassSvg flinders' />
            <SaracomAthwartship title='Athwartships' handleCircle={handleAthMagnet} className='compassSvg ath' />
            <SaracomBoxesPort title='Boxes Port' handlePlate={handlePlate} className='compassSvg boxes' />
            <SaracomBoxesStbd title='Boxes Stbd' handlePlate={handlePlate} className='compassSvg boxes' />
        </div>
    )
}

