export type GiftData = {
  id: string,
  
}

export type PaymentData = {
  creditCardNumber: string
  creditCardHolder: string
  creditCardExpiration: string
  creditCardSecurityCode: string
  installmentCount: number
  name: string
  email: string
  cpfCnpj: string
  postalCode: string
  addressNumber: string
  addressComplement?: string
  mobilePhone: string
}

