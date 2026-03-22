import { PrismaClient, Role, CandidateStatus } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const adminPassword = await bcrypt.hash('Admin@123', 10);

  const admin = await prisma.user.upsert({
    where: { email: 'admin@oricruit.local' },
    update: { password: adminPassword },
    create: {
      email: 'admin@oricruit.local',
      password: adminPassword,
      name: 'Admin',
      role: Role.ADMIN,
    },
  });

  await prisma.candidate.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'Maria Kowalska',
      email: 'maria.kowalska@example.com',
      phone: '555-0102',
      currentTitle: 'Frontend Developer',
      status: CandidateStatus.SCREENING,
      ownerId: admin.id,
      notes: 'Experienced in React/Next.js and i18n',
    },
  });

  await prisma.candidate.upsert({
    where: { id: 2 },
    update: {},
    create: {
      name: 'Andrzej Nowak',
      email: 'andrzej.nowak@example.com',
      phone: '555-0103',
      currentTitle: 'Backend Engineer',
      status: CandidateStatus.INTERVIEW,
      ownerId: admin.id,
      notes: 'Node/NestJS specialist',
    },
  });

  console.log('Seed data created successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
