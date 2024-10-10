import * as yup from 'yup';

export const confirmationSchema = yup.object({
  name: yup.string().required('Esse campo é obrigatório'),
  escorts: yup.number().required('Defina a quantidade de acompanhantes')
})

export type GuestInputs = yup.InferType<typeof confirmationSchema>