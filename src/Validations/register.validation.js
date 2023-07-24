import * as yup from 'yup'

export const registerSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Email is not valid").required("Email is required"),
    role: yup.string().required("Role is required"),
    password: yup.string().required("Password is required"),
})