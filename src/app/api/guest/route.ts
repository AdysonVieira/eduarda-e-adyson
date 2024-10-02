import { NextResponse } from "next/server";
import { db } from "@/lib/prisma";

export async function POST(res: NextResponse) {
  const { name, escorts } = await res.json();

  try {
    const guest = await db.guest.create({
      data: {
        name,
        escorts,
      },
    });
    return NextResponse.json(guest, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Erro ao confirmar presença"}, { status: 500})
  }
}