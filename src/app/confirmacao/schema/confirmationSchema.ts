import * as yup from 'yup';

export const confirmationSchema = yup.object({
  name: yup.string().required('Esse campo é obrigatório'),
  escorts: yup.number()
})

export type GuestInputs = yup.InferType<typeof confirmationSchema>