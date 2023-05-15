import React, {useState, useEffect} from "react";
import { SauraContainer } from '../Compasses/SauraKeiki/SauraContainer'
import { OsakaContainer } from '../Compasses/OsakaNunotani/OsakaContainer'
import { TokimekContainer } from "../Compasses/Tokimek/TokimekContainer";
import { TokyoContainer } from '../Compasses/TokyoKeiki/TokyoContainer';
import { SaracomContainer } from "../Compasses/Saracom-Sperry-Plath2060/SaracomContainer";
import { CustomForm } from "../Form/FormContainer";

export const PreContainer = () => {

    const [selectValue, setSelectValue] = useState('')

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
            default:
                return <div className="svgContainer"><p>Please, select a compass.</p></div>
        }
    }
    return(
        <>
            <CustomForm setValue={setSelectValue} />
            {renderCompass(selectValue)} 
        </>     
    )
}