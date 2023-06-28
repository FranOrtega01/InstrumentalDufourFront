import * as yup from 'yup'

export const contactSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Email is not valid").required("Email is required"),
    number: yup.string().required("Cellphone is is required"),
    enterprise: yup.string().required("Enterprise is required"),
    subject: yup.string().required("Subject is required"),
    message: yup.string().required("Message is required"),
})