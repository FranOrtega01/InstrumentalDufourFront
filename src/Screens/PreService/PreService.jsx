import React, { useState, useEffect, useRef } from "react";
import './preService.scss'

import { PreserviceHeader } from "./Components/PreserviceHeader/PreserviceHeader";
import { SauraContainer } from './Components/Compasses/SauraKeiki/SauraContainer'
import { OsakaContainer } from './Components/Compasses/OsakaNunotani/OsakaContainer'
import { TokimekContainer } from "./Components/Compasses/Tokimek/TokimekContainer";
import { TokyoContainer } from './Components/Compasses/TokyoKeiki/TokyoContainer';
import { SaracomContainer } from "./Components/Compasses/Saracom-Sperry-Plath2060/SaracomContainer";
import { CassensContainer } from "./Components/Compasses/Cassens/CassensContainer";
import { LilleyContainer } from "./Components/Compasses/Lilley/LilleyContainer";
import { OtherContainer } from './Components/Compasses/Other/OtherContainer';

import { CustomForm } from "./Components/Form/FormContainer";
import { Dropzone } from '../../Components/Dropzone/Dropzone'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import { preServiceSchema } from "../../Validations/preService.validation";

import { useParams } from 'react-router-dom';

import { HelpModal } from './Components/Modals/HelpModal'
import { ToTop } from "../../Components/ToTop";
import { Redirect } from "../../Components/Redirect/Redirect";

import config from '../../config/config'

export const PreContainer = () => {

    const { token } = useParams();

    const [unauthorized, setUnauthorized] = useState(false)

    const [showHelp, setShowHelp] = useState(true)

    useEffect(() => {
        const validateToken = async () => {
            try {
                const response = await fetch(`${config.backURL}/preservice/authorizate-token`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (!response.ok) {
                    setUnauthorized(true)
                }
            } catch (error) {
                setUnauthorized(true)
            }
        };

        validateToken();
    }, [token]);

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
                return <OtherContainer
                    files={other}
                    setFiles={setOther}
                    otherError={otherError}
                />
            default:
                return <div className="svgContainer"><p>Please, select a compass.</p></div>
        }
    }

    // States Hook
    const [loading, setLoading] = useState(false)

    const [particulars, setParticulars] = useState([])
    const [compassPhotos, setCompassPhotos] = useState([])
    const [lastDevCurve, setLastDevCurve] = useState([])
    const [other, setOther] = useState([])

    const [particularsError, setParticularsError] = useState('')
    const [compassPhotosError, setCompassPhotosError] = useState('')
    const [lastDevCurveError, setLastDevCurveError] = useState('')
    const [otherError, setOtherError] = useState('')

    // Ref Hook
    const svgRef = useRef()
    const recordRef = useRef()


    // Form Hook
    const { register, watch, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(preServiceSchema)
    });

    const markValue = watch('mark');

    useEffect(() => {
        if (markValue !== 'OTHER') {
            setOther([])
            setOtherError('')
        }
    }, [markValue])

    const onSubmit = async (data) => {
        setParticularsError('')
        setCompassPhotosError('')
        setLastDevCurveError('')
        if (particulars?.length === 0) setParticularsError('At least one file is required for Ship Particulars')
        if (compassPhotos?.length === 0) setCompassPhotosError('At least one file is required for Compass Photos')
        if (lastDevCurve?.length === 0) setLastDevCurveError('At least one file is required for Last Deviation Curve')
        if (markValue === "OTHER" && other?.length === 0) return setOtherError('At least one file is required for Other')

        if ((particulars?.length === 0 || compassPhotos?.length === 0 || lastDevCurve?.length === 0)) return

        setLoading(true)

        try {

            const formData = new FormData();

            data.svg = svgRef.current.outerHTML;
            data.record = recordRef.current.outerHTML

            // Data key-value
            for (const [key, value] of Object.entries(data)) {
                formData.append(key, value)
            }

            // Files

            particulars.map(file => formData.append('particulars[]', file))
            compassPhotos.map(file => formData.append('compassPhotos[]', file))
            lastDevCurve.map(file => formData.append('lastDevCurve[]', file))
            if (markValue === 'OTHER') {
                other.map(file => formData.append('other[]', file))
            }


            const response = await fetch(`${config.backURL}/preservice/${token}/send`, {
                method: 'POST',
                body: formData
            })

            if(response.ok){
                console.log(response.ok);
            }
            


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
                <section className="preServiceSection">
                    <PreserviceHeader setShowHelp={setShowHelp}/>
                    <div className='preServiceCont col-10 container justify-content-center '>
                        <h2>Pre Service Form</h2>
                        <form onSubmit={handleSubmit(onSubmit)} 
                        className="row m-0 justify-content-center"
                        >
                            <CustomForm
                                errors={errors}
                                register={register}
                                recordRef={recordRef}
                            />
                            <div className="mb-5" ref={svgRef}>
                                {renderCompass(markValue)}
                            </div>

                            <Dropzone
                                files={particulars}
                                setFiles={setParticulars}
                                id={'particulars'}
                                title={'Ship Particulars'} />

                            {particularsError && <p className="error">{particularsError}</p>}

                            <Dropzone
                                files={compassPhotos}
                                setFiles={setCompassPhotos}
                                id={'compassPhotos'}
                                title={'Compass Photos'} />
                            {compassPhotosError && <p className="error">{compassPhotosError}</p>}

                            <Dropzone
                                files={lastDevCurve}
                                setFiles={setLastDevCurve}
                                id={'lastDevCurve'}
                                title={'Last Deviation Curve'} />
                            {lastDevCurveError && <p className="error">{lastDevCurveError}</p>}

                            <textarea 
                                {...register('obs')} 
                                placeholder="Clarification or comment..."
                                className="col-10"
                            ></textarea>
                            <div className="action col-12 m-0 py-4" id="preService-submit">
                                <input
                                    type="submit"
                                    value={loading ? "Sending... Please wait." : "Send"}
                                    className="action-button"
                                    disabled={loading}
                                />
                            </div>
                        </form>
                    </div>
                </section>
                <ToTop />
                <HelpModal showHelp={showHelp} setShowHelp={setShowHelp}/>
            </>
        )
    )
}
