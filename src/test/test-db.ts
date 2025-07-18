import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.$connect();
    console.log('------------------------')
    console.log('✅ Connected to NeonDB!')
    console.log('------------------------')
  } catch (error) {
    console.log('-----------------------------------------------------------------------------')
    console.log('❌ Failed to connect to NeonDB:', error)
    console.log('-----------------------------------------------------------------------------')
  } finally {
    await prisma.$disconnect();
  }
}

main();