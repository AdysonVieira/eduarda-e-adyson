import * as yup from 'yup';

export const GuestDataSchema = yup.object({
  name: yup.string().required('Esse campo é obrigatório'),
  cpfCnpj: yup.string().required('O campo CPF é obrigatório').transform((value) => value.replace(/[^\d]/g, '')),
  mobilePhone: yup.string().required('O campo celular é obrigatório').transform((value) => value.replace(/[^\d]/g, '')),
  message: yup.string(),
})

export type GuestDataInputs = yup.InferType<typeof GuestDataSchema>