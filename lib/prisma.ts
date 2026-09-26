import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

// בגרסה 7 מעבירים את הכתובת ישירות לאדפטר, אין צורך ב-Pool נפרד
const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!
});

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

// מזרקים את האדפטר לתוך הקליינט
export const prisma =
  globalForPrisma.prisma || new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;