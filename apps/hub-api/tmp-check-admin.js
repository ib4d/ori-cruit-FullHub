const { PrismaClient } = require('@prisma/client');
(async()=>{ const prisma = new PrismaClient();
  try {
    const u = await prisma.user.findUnique({ where: { email: 'admin@oricruit.local' } });
    console.log('user', u);
  } catch(e){console.error(e);
  } finally { await prisma.$disconnect(); }
})();