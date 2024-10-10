import { GiftData } from "@/app/@types/checkout";
import { GuestDataInputs } from "@/app/carrinho/_schema/GuestDataSchema";
import CheckoutPixService from "@/services/CheckoutPixService";
import { QrCode } from "lucide-react";
import { NextRequest, NextResponse } from "next/server";

export async function POST(res: NextResponse<{gift: GiftData, guest: GuestDataInputs}>) {
  const { gift, guest} = await res.json();
  
  const checkoutService = new CheckoutPixService()
  const qrCode = await checkoutService.process(gift as GiftData, guest)
  
  return NextResponse.json(qrCode, {
    status: 201,
  })
}