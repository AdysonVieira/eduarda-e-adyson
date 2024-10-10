import { GiftReceived, GiftReceivedStatus } from "@prisma/client";
import { apiAsaas } from "./api";
import { GuestData, PaymentData } from "@/app/@types/checkout";

class PaymentCreditCardService {
  async process(
    giftReceived: GiftReceived,
    payment: PaymentData,
  ): Promise<{
    transactionId: string;
    status: GiftReceivedStatus;
    gatewayStatus: string;
  }> {
      const customerId = await this._createCustomer(payment);
      const transaction = await this._createCreditCardTransaction(customerId, giftReceived, payment)
      
      return {
        transactionId: transaction.transactionId,
        status: GiftReceivedStatus.PENDING,
        gatewayStatus: transaction.gatewayStatus,
      }
    }

  private async _createCustomer(payment: PaymentData | GuestData){
    const customerResponse = await apiAsaas.get(`/customers?cpfCnpj=${payment.cpfCnpj}`)
    if (customerResponse.data.data?.length > 0) {
      return customerResponse.data.data[0]?.id
    }

    const customerParams = {
      name: payment.name,
      cpfCnpj: payment.cpfCnpj,
      mobileNumber: payment.mobilePhone,
      notificationDisabled: true
    }

    const res = await apiAsaas.post('/customers', customerParams)

    return res.data.id
  }

  private async _createCreditCardTransaction(
    customerId: string,
    giftReceived: GiftReceived,
    payment: PaymentData
  ): Promise<{
    transactionId: string;
    gatewayStatus: string
  }> {

    const paymentParams = {
      billingType: 'CREDIT_CARD',
      customer: customerId,
      value: giftReceived.total,
      dueDate: new Date().toISOString(),
      description: giftReceived.giftId,
      installmentCount: payment.installmentCount,
      totalValue: (+giftReceived.total + (+giftReceived.total * 0.03)),
      callback: {autoRedirect: true, successUrl: 'https://eduardaeadyson.vercel.app/success'},
      creditCard: {
        holderName: payment.creditCardHolder,
        number: payment.creditCardNumber,
        expiryMonth: payment.creditCardExpiration.split('-')[1],
        expiryYear: payment.creditCardExpiration.split('-')[0],
        ccv: payment.creditCardSecurityCode
      },
      creditCardHolderInfo: {
        name: payment.name,
        cpfCnpj: payment.cpfCnpj,
        email: payment.email,
        postalCode: payment.postalCode,
        mobilePhone: payment.mobilePhone,
        addressNumber: payment.addressNumber,
        addressComplement: payment.addressComplement,
      }
    }
    
    try {
      const res = await apiAsaas.post('/payments', paymentParams)
      return {
        transactionId: res.data.id,
        gatewayStatus: res.data.status
      }
    } catch(err) {
      console.error('Erro ao criar cobrança no cartão de crédito');
      return {
        transactionId: '',
        gatewayStatus: 'ERROR'
      }
    }
  }
};

export default PaymentCreditCardService