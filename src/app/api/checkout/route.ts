import { GiftData } from "@/app/_types/checkout";
import { GuestDataInputs } from "@/app/carrinho/_schema/GuestDataSchema";;
import CheckoutService from "@/services/CheckoutService";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const {
    gift,
    guest,
  }: {
      gift: GiftData,
      guest: GuestDataInputs,
    } = await req.json();

  const checkoutService = new CheckoutService()
  const invoiceUrl = await checkoutService.process(gift, guest)

  return NextResponse.json(invoiceUrl, {
    status: 201,
  })
}