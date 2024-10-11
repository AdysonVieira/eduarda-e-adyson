import * as yup from 'yup';

export const PaymentGuestDataSchema = yup.object({
  name: yup.string().required('O nome do titular é obrigatório'),
  email: yup.string().required('O email é obrigatório'),
  cpfCnpj: yup.string().required('O campo CPF é obrigatório').transform((value) => value.replace(/[^\d]/g, '')),
  postalCode: yup.string().required('O Cep é obrigatório').transform((value) => value.replace(/[^\d]/g, '')),
  addressNumber: yup.string().required(),
  mobilePhone: yup.string().required('O campo celular é obrigatório').transform((value) => value.replace(/[^\d]/g, '')),
})

export type PaymentGuestDataInputs = yup.InferType<typeof PaymentGuestDataSchema>