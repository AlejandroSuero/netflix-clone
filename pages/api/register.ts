import bcrypt from "bcrypt"
import type { NextApiRequest, NextApiResponse } from "next"
import prismadb from "@/lib/prismadb"

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).end()
  }
  try {
    const { username, email, password } = req.body
    const existingUser = await prismadb.user.findUnique({
      where: {
        email
      }
    })
    if (existingUser) {
      res.status(422).json({ error: "Email is already taken" })
      return
    }
    const hashedPassword = await bcrypt.hash(password, 12)
    const user = await prismadb.user.create({
      data: {
        name: username,
        email,
        hashedPassword,
        image: "",
        emailVerified: new Date()
      }
    })
    res.status(200).json(user)
  } catch (error) {
    if (process.env.NODE_ENV === "development") console.error(error)
    return res.status(400).end()
  }
}
