import React from 'react'
import { Dropzone } from '../../../../../Components/Dropzone/Dropzone'

export const OtherContainer = ({ files, setFiles, otherError }) => {
  return (
    <>
      <Dropzone id={'other'} files={files} setFiles={setFiles} title={'Magnets Photos'} />
      {otherError && <p className="error">{otherError}</p>}
    </>
)
}
