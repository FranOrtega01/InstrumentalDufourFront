import React, {useEffect} from 'react'

export const FormButton = ({ href, fetchMethod, allValues, svgRef, recordRef, title, particulars, compassPhotos, lastDevCurve, ...props}) => {

    const handleButton = e => {

        try {
            console.log(particulars);

            if(!particulars?.length || !compassPhotos?.length || !lastDevCurve?.length){
                return console.log('Faltan archivos')
            }

            const formData = new FormData()

            for (const [key, value] of Object.entries(allValues)) {
                formData.append(key, value)
            }
            formData.append('svg', svgRef.current.outerHTML);
            formData.append('record', recordRef.current.outerHTML);

            particulars.map(file => formData.append('particulars[]',file))
            compassPhotos.map(file => formData.append('compassPhotos[]',file))
            lastDevCurve.map(file => formData.append('lastDevCurve[]',file))

            

            fetch(href, {
                method: fetchMethod,
                body:formData
            })

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <button
            {...props}  
            onClick={e => handleButton(e)}          
            >
            {title}
        </button>
    )
}
