import { GiftData } from "@/app/@types/checkout";
import { GuestDataInputs } from "@/app/carrinho/_schema/GuestDataSchema";
import { PaymentCardDataInputs } from "@/app/carrinho/pagamento/_schema/PaymentCardDataSchema";
import { PaymentGuestDataInputs } from "@/app/carrinho/pagamento/_schema/PaymentGuestDataSchema";
import CheckoutCreditCardService from "@/services/CheckoutCreditCardService";
import { NextRequest, NextResponse } from "next/server";

export async function POST(res: NextResponse<{gift: GiftData, guest: GuestDataInputs, paymentGuestData: PaymentGuestDataInputs, paymentCardData: PaymentCardDataInputs}>) {
  const { gift, guest, paymentGuestData, paymentCardData } = await res.json();
  const payment = {...paymentGuestData, ...paymentCardData}
  
 
  const checkoutService = new CheckoutCreditCardService()
  const orderCreated = await checkoutService.process(gift, guest, payment)

  return NextResponse.json(orderCreated, {
    status: 201,
  })
}