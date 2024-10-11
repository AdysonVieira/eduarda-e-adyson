import { GiftData } from "@/app/_types/checkout";
import { GuestDataInputs } from "@/app/carrinho/_schema/GuestDataSchema";
import CheckoutPixService from "@/services/CheckoutPixService";
import { QrCode } from "lucide-react";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { gift, guest }: { gift: GiftData, guest: GuestDataInputs } = await req.json();

  const checkoutService = new CheckoutPixService()
  const qrCode = await checkoutService.process(gift as GiftData, guest)

  return NextResponse.json(qrCode, {
    status: 201,
  })
}