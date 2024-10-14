import { GiftReceived, GiftReceivedStatus } from "@prisma/client";
import { apiAsaas } from "./api";
import { PaymentData } from "@/app/_types/checkout";
import { GuestDataInputs } from "@/app/carrinho/_schema/GuestDataSchema";

class PaymentService {
  async process(
    giftReceived: GiftReceived,
    guest: GuestDataInputs,
  ){
    const customerId = await this._createCustomer(guest);
    const { invoiceUrl } = await this._createTransaction(customerId, giftReceived, guest)

    return {invoiceUrl}
  }

  private async _createCustomer(guest: GuestDataInputs): Promise<string> {
    
    const customerResponse = await apiAsaas.get(`/customers?cpfCnpj=${guest.cpfCnpj}`)
    
    if (customerResponse.data.data?.length > 0) {
      return customerResponse.data.data[0]?.id
    }

    const customerParams = {
      name: guest.name,
      cpfCnpj: guest.cpfCnpj,
      mobileNumber: guest.mobilePhone,
      notificationDisabled: true
    }

    const res = await apiAsaas.post('/customers', customerParams)

    return res.data.id
  }

  private async _createTransaction(
    customerId: string,
    giftReceived: GiftReceived,
    guest: GuestDataInputs
  ): Promise<{
    invoiceUrl: string;
  }> {

    const paymentParams = {
      billingType: 'UNDEFINED',
      customer: customerId,
      value: giftReceived.total,
      description: 'Presente de casamento Eduarda e Adyson',
      dueDate: new Date().toISOString(),
    }

    
    const res = await apiAsaas.post('/payments', paymentParams)
    
    return {
      invoiceUrl: res.data.invoiceUrl,
    }
  }
};

export default PaymentService