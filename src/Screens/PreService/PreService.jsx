import React, {useState, useEffect, useRef} from "react";
import { SauraContainer } from './Components/Compasses/SauraKeiki/SauraContainer'
import { OsakaContainer } from './Components/Compasses/OsakaNunotani/OsakaContainer'
import { TokimekContainer } from "./Components/Compasses/Tokimek/TokimekContainer";
import { TokyoContainer } from './Components/Compasses/TokyoKeiki/TokyoContainer';
import { SaracomContainer } from "./Components/Compasses/Saracom-Sperry-Plath2060/SaracomContainer";
import { CassensContainer } from "./Components/Compasses/Cassens/CassensContainer";
import { LilleyContainer } from "./Components/Compasses/Lilley/LilleyContainer";

import { CustomForm } from "./Components/Form/FormContainer";
import {FormButton } from './Components/Form/FormButton'

export const PreContainer = () => {

    const [compass, setCompass] = useState('')
    const [name, setName] = useState('')
    const [sailing, setSailing] = useState('')
    const [mark, setMark] = useState('')
    const [model, setModel] = useState('')
    const [serial, setSerial] = useState('')
    const [currentVariation, setCurrentVariation] = useState('')
    
    const [data, setData] = useState({})

    const svgRef = useRef()

    
    useEffect(() => {
        const svgData = svgRef.current.outerHTML
        setData({
            name,
            sailing,
            currentVariation,
            compass,
            svgData
        })
        console.log(data);
    }, [compass, name, sailing, currentVariation, svgRef])


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
                return <div className="svgContainer"><p>Drop Files...</p></div>            
            default:
                return <div className="svgContainer"><p>Please, select a compass.</p></div>
        }
    }
    return(
        <>
            <CustomForm setSerial={setSerial} setModel={setModel} setMark={setMark} setCompass={setCompass} setName={setName} setSailing={setSailing} setCurrentVariation={setCurrentVariation} />
            <div ref={svgRef}>
                {renderCompass(mark)}
            </div>
            <FormButton title={'Send'} href={'http://127.0.0.1:8080/preservice/send'} fetchMethod={'POST'} data={data}/>
        </>     
    )
}