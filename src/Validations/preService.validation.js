import * as yup from 'yup'

const preServiceSchema = yup.object().shape({
    shipsName: yup.string().required()
})