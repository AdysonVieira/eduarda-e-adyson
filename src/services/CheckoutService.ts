import { $Enums, Gift, GiftReceived, GiftReceivedStatus } from "@prisma/client";
import { GiftData, PaymentData } from '@/app/_types/checkout'
import { db } from "../lib/prisma";
import { GuestDataInputs } from "@/app/carrinho/_schema/GuestDataSchema";
import PaymentService from "./PaymentService";

export interface CheckoutResponse {
  invoiceUrl: string;
}

class CheckoutService {
  async process(gift: GiftData, guest: GuestDataInputs) {

    const giftInCart = await db.gift.findUnique({
      where: {
        id: gift.id
      }
    });

    let orderCreated = await this._createOrder(giftInCart!, guest);

    const paymentService = new PaymentService();
    const paymentResponse = await paymentService.process(orderCreated, guest);

    
    orderCreated = await db.giftReceived.update({
      where: {
        id: orderCreated.id
      },
      data: {
        status: GiftReceivedStatus.PENDING
      }
    });

    // return {
    //   invoiceUrl: paymentResponse.invoiceUrl
    // }
  }


  private async _createOrder(gift: Gift, guest: GuestDataInputs): Promise<GiftReceived> {
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

export default CheckoutService;