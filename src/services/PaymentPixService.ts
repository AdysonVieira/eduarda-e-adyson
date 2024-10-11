import { GiftReceived, GiftReceivedStatus } from "@prisma/client";
import { apiAsaas } from "./api";
import { PixQrCodeResponse } from "./CheckoutPixService";

class PaymentPixService {
  async process(
    giftReceived: GiftReceived,
  ): Promise<PixQrCodeResponse>{
    
    const key = await this._createAddressKey()
    console.log(key)
    const qrCode = await this._createQrCode(giftReceived, key)
    console.log(qrCode)
    return {
      id: qrCode.id,
      encodedImage: qrCode.encodedImage,
      payload: qrCode.payload,
    }
  }

  private async _createQrCode(gift: GiftReceived, key: string):Promise<PixQrCodeResponse>{
      const qrCodeParams = {
        addressKey: key,
        description: 'Presente Eduarda e Adyson',
        value: gift.total,
        format: 'ALL',
        expirationSeconds: 7200,
        allowsMultiplePayments: false
      }
      const qrCode = await apiAsaas.post('/pix/qrCodes/static', qrCodeParams )
      
      return {
        id: qrCode.data.id,
        encodedImage: qrCode.data.encodedImage,
        payload: qrCode.data.payload,
      }
  }

  private async _createAddressKey(): Promise<string> {
    const key = await apiAsaas.post('/pix/addressKeys', {type: "EVP"})
    return key.data.key
  }
}

export default PaymentPixService