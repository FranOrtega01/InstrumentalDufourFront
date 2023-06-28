import React, { useCallback, useState, useMemo } from 'react'
import { useDropzone } from 'react-dropzone'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import './Dropzone.scss'

export const Dropzone = ({ title, id, files, setFiles }) => {



    const onDrop = useCallback(acceptedFiles => {
        if (acceptedFiles?.length) {
            setFiles(previousFiles => [
                ...previousFiles,
                ...acceptedFiles.map(file => Object.assign(file, {preview: URL.createObjectURL(file)}))
            ]);
        }
    }, [])
    const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'image/jpeg': ['.jpg', '.jpeg'],
            'image/png': ['.png'],
            'application/msword': ['.doc'],
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
            'application/pdf': ['.pdf']
        },
        maxSize: 1024 * 5000,
    })

    const removeFile = name => {
        setFiles(files => files.filter(file => file.name !== name))
    }

    const style = useMemo(() => ({
        ...baseStyle,
        ...(isFocused ? focusedStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
    }), [
        isFocused,
        isDragAccept,
        isDragReject
    ]);

    return (
        <>
            <h3>{title}</h3>
            <article id={id} className='col-10 mt-5  m-auto'>

                <div {...getRootProps({
                    style
                })}
                >
                    <input {...getInputProps()} />
                    {
                        !isDragActive ? (
                            <>
                                <p>Drag & drop some files here, or click to select files.</p>
                                <p>Only images, pdf, .doc and .xlxs are acepted.</p>
                            </>
                        ) :

                            isDragReject ?
                                <p>Invalid file type</p> :

                                <p>Drop the files here...</p>
                    }
                </div>

                {/* Preview */}
                {files && <h3 className='mt-2' style={{ fontSize: 20 }}>Files ({files.length})</h3>}
                <ul className='dropzoneList'>
                    {files.map((file, index) => (
                        <li key={`${file.name} - ${index}`}>
                            <img
                                src={file.preview}
                                alt={file.name}
                                height={100}
                                onLoad={() => {
                                    URL.revokeObjectURL(file.preview)
                                }}
                            />
                            <button
                                type='button'
                                onClick={() => removeFile(file.name)}
                            >
                                <FontAwesomeIcon icon={faXmark} width={25} />
                            </button>
                            <p>{file.name}</p>
                        </li>
                    ))}
                </ul>
            </article>
        </>

    )
}


const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out',
    height: 400,
    cursor:'pointer',
    userSelect: 'none'
    

};

const focusedStyle = {
    borderColor: '#2196f3'
};

const acceptStyle = {
    borderColor: '#2196f3'
};

const rejectStyle = {
    borderColor: '#ff1744'
};


