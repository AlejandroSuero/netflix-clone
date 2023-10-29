/* eslint-disable no-var */
import type { PrismaClient } from "@prisma/client"

declare global {
  namespace globalThis {
    var prismadb: PrismaClient
  }
}
