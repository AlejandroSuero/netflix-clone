import type { NextApiRequest, NextApiResponse } from "next"

import serverAuth from "@/libs/serverAuth"

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") return res.status(405).end()
  try {
    const { currentUser } = await serverAuth(req)
    res.status(200).json(currentUser)
  } catch (error) {
    if (process.env.NODE_ENV === "development") console.error(error)
    return res.status(400).end()
  }
}
