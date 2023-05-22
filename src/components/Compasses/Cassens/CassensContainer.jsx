import React from "react";
import { SvgComponent as CassensHeeling} from "./CassensHeelings";
import { SvgComponent as CassensFA } from "./CassensFA";
import { SvgComponent as CassensBoxPort } from './CassensBoxPort';
import { SvgComponent as CassensBoxStbd } from "./CassensBoxStbd";
import { SvgComponent as CassensFlinders } from "./CassensFlinders";
import { SvgComponent as CassensAth } from "./CassensAth";

export const CassensContainer = () => {

    const changeCircleColor = (e, value) => {

        switch (value) {
            case 0:
                e.target.style.fill = '#fff'
                break;

            case 1:
                e.target.style.fill = '#e62e1e'
                break;

            case 2:
                e.target.style.fill = '#531ee6'
                break;
        }
    }

    const changePlateColor = (e, value) => {

        switch (value) {
            case 0:
                e.target.style.fill = '#fff'
                break;

            case 1:
                e.target.style.fill = '#000'
                break;
        }
    }

    const handlePlate = (e) => {
        let value = e.target.getAttribute('data-value')

        if (!value) e.target.setAttribute('data-value', 0)

        value == 1 ? value = 0 : value++

        e.target.setAttribute('data-value', value)

        changePlateColor(e, value)
    }

    const handleCircle = (e) => {
        let value = e.target.getAttribute('data-value')

        if (!value) e.target.setAttribute('data-value', 0)

        value == 2 ? value = 0 : value++

        e.target.setAttribute('data-value', value)

        changeCircleColor(e, value)
    }

    return(
        <div className="Cassens">
            <CassensFA title="Fore and After Magnets" handleCircle={handleCircle} className='compassSvg foreAfter' />
            <CassensHeeling title="Heelings" className='compassSvg heelings' />
            <CassensFlinders title='Flinders'handlePlate={handlePlate} className='compassSvg flinders' />
            <CassensAth title='Athwartships' handleCircle={handleCircle} className='compassSvg ath' />
            <CassensBoxPort title='PORTBOARD MAGNETS' handlePlate={handlePlate} className='compassSvg boxes'/>
            <CassensBoxStbd title='STARBOARD MAGNETS' handlePlate={handlePlate} className='compassSvg boxes'/>
        </div>
    )
}
