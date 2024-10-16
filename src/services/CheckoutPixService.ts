import { Gift, GiftReceived } from "@prisma/client";
import { GiftData } from '@/app/_types/checkout'
import { db } from "../lib/prisma";
import PaymentPixService from "./PaymentPixService";
import { GuestDataInputs } from "@/app/carrinho/_schema/GuestDataSchema";

export interface PixQrCodeResponse {
  id: string;
  encodedImage: string;
  payload: string;
}

class CheckoutPixService {
  async process(gift: GiftData, guest: GuestDataInputs): Promise<PixQrCodeResponse> {
    const giftInCart = await db.gift.findUnique({
      where: {
        id: gift.id
      }
    })
    let orderCreated = await this._createOrder(giftInCart!, guest)

    const paymentService = new PaymentPixService()
    const res = await paymentService.process(orderCreated)

    return {
      id: res.id,
      encodedImage: res.encodedImage,
      payload: res.payload,
    }
  }

  private async _createOrder(gift: Gift, guest: GuestDataInputs): Promise<GiftReceived> {
    const orderCreated = await db.giftReceived.create({
      data: {
        guestName: guest.name,
        message: guest.message,
        total: Number(gift.price),
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

export default CheckoutPixService