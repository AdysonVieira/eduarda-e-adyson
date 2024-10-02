import { CreditCard } from 'lucide-react';
import * as yup from 'yup';

export const PaymentDataSchema = yup.object({
  creditCardNumber: yup.string().required('O número do cartão é obrigatório').transform((value) => value.replace(/[^\d]/g, '')),
  creditCardHolder: yup.string().required('O campo é obrigatório'),
  creditCardExpiration: yup.string().required('A data de validade é obrigatória').transform((value) => {
    const [month, year] = value.split('/')
    if( month && year && month.length === 2 && year.length === 2) {
      return new Date(+`20${year}`, +month - 1, 1).toISOString()
    }
    return value
  }).test('validateCreditCardExpiration', 'A data de validade é inválida', (value) => new Date(value) >= new Date()),
  creditCardSecurityCode: yup.string().required('O código CVV é obrigatório'),
  installmentCount: yup.number().required('Seleciona a quantidade de parcelas')

})

export type PaymentDataInputs = yup.InferType<typeof PaymentDataSchema>