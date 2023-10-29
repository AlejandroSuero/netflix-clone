import { PrismaClient } from "@prisma/client"

const prismaClientSingleton = () => {
  return new PrismaClient()
}

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton> | undefined

interface GlobalPrisma {
  prismadb: PrismaClientSingleton
}

const globalForPrisma = globalThis as unknown as GlobalPrisma

const client = globalForPrisma.prismadb ?? prismaClientSingleton()

if (process.env.NODE_ENV === "production") globalForPrisma.prismadb = client

export default client
