import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: "mysql://root:Bm%40%239130@localhost:3306/allshop"
    }
  }
});

async function promover() {
  const emailAdmin = 'brunaaguiiar2020@gmail.com';  
  
  try {
    const usuario = await prisma.usuario.update({
      where: { email: emailAdmin },
      data: { role: 'ADMIN' },
    });
    console.log('Sucesso! Usuário promovido a ADMIN:', usuario.email);
  } catch (error) {
    console.error('Erro ao promover:', error.message);
  } finally {
    await prisma.$disconnect();
  }
}

promover();