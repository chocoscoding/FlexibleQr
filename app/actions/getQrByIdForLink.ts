import prisma from "@/app/libs/prismadb";

export default async function getQrByIdForLink(linkId: string) {
  try {
    const qr = await prisma.qr.findUnique({
      where: {
        linkId,
      },
      select: {
        name: true,
        link: true,
      },
    });
    return qr;
  } catch (error) {
    console.log(error);
    return null;
  }
}
