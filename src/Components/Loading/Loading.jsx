import React from 'react'
import Spinner from 'react-bootstrap/Spinner';


export const Loading = ({...props}) => {
  return (
    <div {...props} style={{...style, ...props?.style}}>
        <Spinner />
    </div>
  )
}

const style = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
}