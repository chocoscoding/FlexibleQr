import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import { nanoid } from "nanoid";

export async function POST(request: Request) {
  const { link, name, id } = await request.json();
  const session = await getServerSession(authOptions);
  const userId = session?.user.id;
  if (!userId) return NextResponse.json({ error: "User not authenticated" }, { status: 403 });

  try {
    const newQr = await prisma.qr.update({
      where: { id,userId },
      data: {
        name,
        link,
      },
    });
    return NextResponse.json(newQr);
  } catch (error) {
    return NextResponse.error();
  }
}
