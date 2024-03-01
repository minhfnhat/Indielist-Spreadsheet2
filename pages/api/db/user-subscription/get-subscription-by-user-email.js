import prisma from "@/lib/prismaClient";
import { getToken } from "next-auth/jwt";

export default async (req, res) => {
  if (req.method == "GET") {
    try {
      const token = await getToken({
        req: req,
        secret: process.env.NEXTAUTH_SECRET,
      });
      console.log(token);
      if (token) {
        const userId = token.user.id;
        const userSubscription = await prisma.userSubscription.findFirst({
          where: {
            userId: userId,
          },
        });
        res.status(200).json(userSubscription);
      } else {
        res.status(401).json({ error: "you don't have permission" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }
};
