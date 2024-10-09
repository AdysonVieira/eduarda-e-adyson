import { $Enums, Gift, GiftReceived, GiftReceivedStatus } from "@prisma/client";
import { GiftData, GuestData, PaymentData } from '@/app/@types/checkout'
import { db } from "../lib/prisma";
import PaymentService from "./PaymentCreditCardService";

export interface CreditCardResponse {
  id: string;
  transactionId: string | null;
  status: $Enums.GiftReceivedStatus;
  gatewayStatus: string;
}

class CheckoutCreditCardService {
  async process(gift: GiftData, guest: GuestData, payment: PaymentData ): Promise<CreditCardResponse> {
  
    const giftInCart = await db.gift.findUnique({
      where: {
        id: gift.id
      }
    });

    let orderCreated = await this._createOrder(giftInCart!, guest);

    const paymentService = new PaymentService();
    
    const { transactionId, gatewayStatus } = await paymentService.process(orderCreated, guest, payment);

    orderCreated = await db.giftReceived.update({
      where: {
        id: orderCreated.id
      },
      data: {
        transactionId,
        status: GiftReceivedStatus.PAID
      }
    });
        
    return {
      id: orderCreated.id,
      transactionId: orderCreated.transactionId,
      status: orderCreated.status,
      gatewayStatus: gatewayStatus
    }
  }

  private async _createOrder( gift: Gift, guest: GuestData): Promise<GiftReceived> {
    const orderCreated = await db.giftReceived.create({
      data: {
        guestName: guest.name,
        message: guest.message,
        total: gift.price,
        gift: {
          connect: {
            id: gift.id
          }
        }
      },
      include: {
        gift: true
      }
    })
    return orderCreated
  }
  
}

export default CheckoutCreditCardService