import prisma from "@/app/libs/prismadb";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function getUserQrs() {
  try {
    const session = await getServerSession(authOptions);
    const userId = session?.user.id;
    if (!userId)
      return {
        list: [],
        count: 0,
      };

    const list = prisma.qr.findMany({
      where: {
        userId,
      },
      select: {
        name: true,
        linkId: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    const count = prisma.qr.count({
      where: {
        userId,
      },
    });

    const promise = await Promise.all([list, count]);
    if (!promise[0])
      return {
        list: [],
        count: promise[1],
      };
    return {
      list: promise[0],
      count: promise[1],
    };
  } catch (error) {
    console.log(error);
    return {
      list: [],
      count: 0,
    };
  }
}
