import React from "react";
import { SvgComponent as LilleyHeeling} from "./LilleyHeelings.jsx";
import { SvgComponent as LilleyFAPort } from "./LilleyFAPort.jsx";
import { SvgComponent as LilleyBoxPort } from './LilleyBoxPort';
import { SvgComponent as LilleyBoxStbd } from "./LilleyBoxStbd";
import { SvgComponent as LilleyFlinders } from "./LilleyFlinders";
import { SvgComponent as LilleyAth } from "./LilleyAth.jsx";

export const LilleyContainer = () => {

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
        <div className="Lilley">
            <LilleyFAPort title="Fore and After Magnets" handleCircle={handleCircle} className='compassSvg foreAfter' />
            {/* <LilleyFAStbd title="Fore and After Magnets" handleCircle={handleCircle} className='compassSvg foreAfter' /> */}
            <LilleyHeeling title="Heelings" className='compassSvg heelings' />
            {/* <LilleyFlinders title='Flinders'handlePlate={handlePlate} className='compassSvg flinders' /> */}
            {/* <LilleyAth title='Athwartships' handleCircle={handleCircle} className='compassSvg ath' /> */}
            {/* <LilleyBoxPort title='PORTBOARD MAGNETS' handlePlate={handlePlate} className='compassSvg boxes'/> */}
            {/* <LilleyBoxStbd title='STARBOARD MAGNETS' handlePlate={handlePlate} className='compassSvg boxes'/> */}
        </div>
    )
}
