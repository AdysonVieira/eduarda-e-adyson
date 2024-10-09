import { GiftData } from "@/app/@types/checkout";
import CheckoutPixService from "@/services/CheckoutPixService";
import { QrCode } from "lucide-react";
import { NextResponse } from "next/server";

export async function POST(res: NextResponse) {
  const { gift, guest} = await res.json();
  
  const checkoutService = new CheckoutPixService()
  const qrCode = await checkoutService.process(gift as GiftData, guest)
  
  return NextResponse.json(qrCode, {
    status: 201,
  })
}