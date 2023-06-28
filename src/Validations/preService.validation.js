import * as yup from 'yup'

export const preServiceSchema = yup.object().shape({
    shipName: yup.string().required("Ship's name is required"),
    sailing: yup.string().required("Sailing at is required"),
    long: yup.string(),
    lat: yup.string(),
    compass: yup.string().required("Compass is required"),
    serial: yup.string().required("Serial is required"),
    currentVariation: yup.string().required("Current variation is required"),
    mark: yup.string().required("Compass mark is required"),
    model:yup.string()
})