export type GiftData = {
  id: string,
  
}

export type GuestData = {
  name: string,
  cpfCnpj: string,
  mobilePhone?: string,
  message?: string
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

