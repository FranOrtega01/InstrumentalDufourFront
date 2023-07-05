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
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import { preServiceSchema } from "../../Validations/preService.validation";

import { useParams } from 'react-router-dom';

import { Redirect } from "../../Components/Redirect/Redirect";

export const PreContainer = () => {

    const { token } = useParams();

    const [unauthorized, setUnauthorized] = useState(false)

    useEffect(() => {
        const validateToken = async () => {
            try {
                // Realiza una solicitud al backend para validar el token
                const response = await fetch('http://127.0.0.1:8080/preservice/authorizate-token', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                });
                console.log(response.ok);
                if (!response.ok) {
                    setUnauthorized(true)
                }
            } catch (error) {
                console.error('Error validating token:', error);
            }
        };

        validateToken();
    }, []);

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


    // Form Hook
    const { register, watch, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(preServiceSchema)
    });

    const markValue = watch('mark');

    const onSubmit = async (data) => {
        setLoading(true)

        try {

            const formData = new FormData();

            data.svg = svgRef.current.outerHTML;
            data.record = recordRef.current.outerHTML

            console.log('FILES');
            console.log(particulars);
            console.log(compassPhotos);
            console.log(lastDevCurve);

            // Data key-value
            for (const [key, value] of Object.entries(data)) {
                formData.append(key, value)
            }

            // Files

            particulars.map(file => formData.append('particulars[]', file))
            compassPhotos.map(file => formData.append('compassPhotos[]', file))
            lastDevCurve.map(file => formData.append('lastDevCurve[]', file))


            const response = await fetch('http://127.0.0.1:8080/preservice/test', {
                method: 'POST',
                body: formData
            })
            const json = await response.json()
            console.log(json);

        } catch (error) {
            console.log(error);
        }
        finally {
            setLoading(false)
        }

    }
    return (
        unauthorized ? <Redirect to='/' message={'Unauthorized, redirecting to home.'} /> : (
            <>
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

                        <div className="action col-12" id="preService-submit">
                            <input
                                type="submit"
                                value={loading ? "Sending... Please wait." : "Send"}
                                className="action-button"
                                disabled={loading}
                            />
                        </div>
                    </form>
                </section>
            </>
        )
    )
}
