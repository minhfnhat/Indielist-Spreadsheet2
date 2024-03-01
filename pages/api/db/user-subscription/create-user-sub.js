import prisma from "@/lib/prismaClient";
import { getToken } from "next-auth/jwt";

export default async (req, res) => {
  if (req.method == "POST") {
    const token = await getToken({
      req: req,
      secret: process.env.NEXTAUTH_SECRET,
    });

    if (token) {
      try {
        const userSubscription = await prisma.userSubscription.create({
          data: req.body,
        });
        res.status(201).json(userSubscription);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    } else {
      // The user is not authenticated, respond with a 401 status code
      res.status(401).json({ message: "Unauthorized" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }
};
