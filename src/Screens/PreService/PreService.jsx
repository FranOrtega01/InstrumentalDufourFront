import React, { useState, useEffect, useRef } from "react";
import './preService.scss'

import { SauraContainer } from './Components/Compasses/SauraKeiki/SauraContainer'
import { OsakaContainer } from './Components/Compasses/OsakaNunotani/OsakaContainer'
import { TokimekContainer } from "./Components/Compasses/Tokimek/TokimekContainer";
import { TokyoContainer } from './Components/Compasses/TokyoKeiki/TokyoContainer';
import { SaracomContainer } from "./Components/Compasses/Saracom-Sperry-Plath2060/SaracomContainer";
import { CassensContainer } from "./Components/Compasses/Cassens/CassensContainer";
import { LilleyContainer } from "./Components/Compasses/Lilley/LilleyContainer";
import { OtherContainer } from './Components/Compasses/Other/OtherContainer.jsx';

import { CustomForm } from "./Components/Form/FormContainer";
import { Dropzone } from '../../Components/Dropzone/Dropzone'
import { FormButton } from './Components/Form/FormButton'

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import { preServiceSchema } from "../../Validations/preService.validation";

export const PreContainer = () => {


    // Compass Magnets (svg) Rendering
    const renderCompass = (value) => {
        switch (value) {
            case "SAURA KEIKI":
                return <SauraContainer />
            case "OSAKA NUNOTANI SEIKI":
                return <OsakaContainer />
            case "TOKIMEK INC":
                return <TokimekContainer />
            case "TOKYO KEIKI":
                return <TokyoContainer />
            case "SARACOM":
                return <SaracomContainer />
            case "PLATH 2060":
                return <SaracomContainer />
            case "SPERRY MARINE":
                return <SaracomContainer />
            case "CASSENS & PLATH":
                return <CassensContainer />
            case "JOHN LILLEY & GUILLIE":
                return <LilleyContainer />
            case "OTHER":
                return <OtherContainer />
            default:
                return <div className="svgContainer"><p>Please, select a compass.</p></div>
        }
    }

    // States Hook
    const [loading, setLoading] = useState(false)
    const [particulars, setParticulars] = useState([])
    const [compassPhotos, setCompassPhotos] = useState([])
    const [lastDevCurve, setLastDevCurve] = useState([])

    // Ref Hook
    const svgRef = useRef()
    const recordRef = useRef()

    useEffect(() => {
        console.log(particulars);
    }, [particulars])


    // Form Hook
    const { register, watch, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(preServiceSchema)
    });

    const markValue = watch('mark');

    const onSubmit = async (data) => {

        setLoading(true)
        console.log(data);
        // const response = await fetch('http://127.0.0.1:8080/preservice/test', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // })

        // const json = await response.json();

        // Reiniciar el formulario después de enviarlo
        // reset();
        setLoading(false)
    }


    return (
        <section className="col-10 container justify-content-center preServiceSection">
            <h2>Pre Service Form</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <CustomForm
                    errors={errors}
                    register={register}
                    recordRef={recordRef}
                />
                <div className="mb-5" ref={svgRef}>
                    {renderCompass(markValue)}
                </div>

                <Dropzone files={particulars} setFiles={setParticulars} id={'particulars'} title={'Ship Particulars'} />
                <Dropzone files={compassPhotos} setFiles={setCompassPhotos} id={'compassPhotos'} title={'Compass Photos'} />
                <Dropzone files={lastDevCurve} setFiles={setLastDevCurve} id={'lastDevCurve'} title={'Last Deviation Curve'} />

                {/* <FormButton
                    title={'Send'}
                    href={'http://127.0.0.1:8080/preservice/test'}
                    fetchMethod={'POST'}
                    svgRef={svgRef}
                    recordRef={recordRef}
                    allValues={allValues}
                    particulars={particulars}
                    compassPhotos={compassPhotos}
                    lastDevCurve={lastDevCurve}
                    className={'btn btn-primary'}
                /> */}
                <div className="action col-12" id="preService-submit">
                    <input 
                    type="submit" 
                    value="Send" 
                    className="action-button"
                    disabled={loading} 
                    />
                </div>
            </form>
        </section>
    )
}
