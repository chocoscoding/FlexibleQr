import prisma from "@/app/libs/prismadb";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function getUserQrById(linkId: string) {
  try {
    const session = await getServerSession(authOptions);
    const userId = session?.user.id;
    if (!userId) return null;

    const qr = await prisma.qr.findUnique({
      where: {
        userId,
        linkId,
      },
    });
    return qr;
  } catch (error) {
    console.log(error);
    return null;
  }
}
