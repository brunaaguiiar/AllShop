import { PrismaClient } from "../src/generated/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient({} as any);

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;