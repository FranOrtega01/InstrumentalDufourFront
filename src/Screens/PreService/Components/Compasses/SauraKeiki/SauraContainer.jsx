import React from "react";
import { SvgComponent as SauraHeeling} from "./SauraHeelings";
import { SvgComponent as SauraFA } from "./SauraFA";
import { SvgComponent as SauraBoxesPort } from "./SauraBoxPort";
import { SvgComponent as SauraBoxesStbd } from "./SauraBoxStbd";
import { SvgComponent as SauraFlinders } from "./SauraFlinders";
import { SvgComponent as SauraAthwartship } from "./SauraAth";

export const SauraContainer = () => {

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
        <div className="SauraKeiki">
            <SauraFA title="Fore and After Magnets" handleCircle={handleCircle}  className='compassSvg foreAfter'/>
            <SauraHeeling title="Healings" className='compassSvg heelings'/>
            <SauraFlinders title='Flinders' handlePlate={handlePlate} className='compassSvg flinders'/>
            <SauraAthwartship title='Athwartships' handleCircle={handleCircle}  className='compassSvg ath'/>
            <SauraBoxesPort title='Boxes Port' handlePlate={handlePlate} className='compassSvg boxes'/>
            <SauraBoxesStbd title='Boxes Stbd' handlePlate={handlePlate} className='compassSvg boxes'/>
        </div>
    )
}





