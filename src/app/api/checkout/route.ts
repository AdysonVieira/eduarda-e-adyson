import CheckoutCreditCardService from "@/services/CheckoutCreditCardService";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(res: NextResponse) {
  const { gift, guest, paymentGuestData, paymentCardtData } = await res.json();
  const payment = {...paymentGuestData, ...paymentCardtData}
  
 
  const checkoutService = new CheckoutCreditCardService()
  const orderCreated = await checkoutService.process(gift, guest, payment)

  return NextResponse.json(orderCreated, {
    status: 201,
  })
}