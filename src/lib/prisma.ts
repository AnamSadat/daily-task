import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

const Prisma = globalForPrisma.prisma ?? new PrismaClient()

globalForPrisma.prisma = Prisma

export default Prisma