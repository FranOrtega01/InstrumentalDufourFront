import * as yup from 'yup'

export const postServiceSchema = yup.object().shape({
    shipName: yup.string().required("Ship's name is required"),
    sailing: yup.string().required("Sailing at is required"),
    mark: yup.string().required("Compass mark is required"),
    model: yup.string(),
    obs: yup.string()
})