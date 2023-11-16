import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

export async function PUT(request: Request) {
  const { data, id } = await request.json();
  const session = await getServerSession(authOptions);
  const userId = session?.user.id;
  if (!userId) return NextResponse.json({ error: "User not authenticated" }, { status: 403 });

  try {
    const newQr = await prisma.qr.update({
      where: { id, userId },
      data,
    });
    return NextResponse.json(newQr);
  } catch (error) {
    return NextResponse.error();
  }
}
