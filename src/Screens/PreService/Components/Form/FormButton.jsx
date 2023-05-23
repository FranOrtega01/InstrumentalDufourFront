import React from 'react'

export const FormButton = ({ href, fetchMethod, data, title, ...props }) => {

    const handleButton = e => {
        console.log(data);
        console.log(fetchMethod);
        try {
            fetch(href, {
                method: fetchMethod,
                headers: {
                    "Content-Type": 'application/json',
                },
                body: JSON.stringify(data)
            })

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <button
            {...props}
            onClick={handleButton}>
            {title}
        </button>
    )
}
