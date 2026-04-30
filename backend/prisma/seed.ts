import { PrismaClient, UserRoleEnum, ScopeType, KaderStatus, KaderJabatan } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import * as bcrypt from 'bcrypt';
import { config } from 'dotenv';
import path from 'path';

// Load .env eksplisit — ts-node tidak otomatis baca .env
config({ path: path.join(__dirname, '..', '.env') });

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('🌱 Seeding database...');

  // ===========================================================================
  // FACULTY
  // ===========================================================================

  const fakultasInformatika = await prisma.faculty.upsert({
    where: { slug: 'informatika' },
    update: {},
    create: {
      name: 'Fakultas Informatika',
      slug: 'informatika',
      description: 'LDK ALFATH Fakultas Informatika',
      primaryColor: '#fffb00',
    },
  });

  console.log('✅ Faculty seeded');

  // ===========================================================================
  // BIDANG — Informatika
  // ===========================================================================

  const bidangNames = ['Kaderisasi', 'Syiar', 'Akademik', 'Media', 'Inti'];

  const bidangs = await Promise.all(
    bidangNames.map((name) =>
      prisma.bidang.upsert({
        where: {
          name_facultyId: {
            name,
            facultyId: fakultasInformatika.id,
          },
        },
        update: {},
        create: {
          name,
          facultyId: fakultasInformatika.id,
        },
      }),
    ),
  );

  console.log('✅ Bidang seeded');

  // ===========================================================================
  // USERS
  // ===========================================================================

  const saltRounds = 10;

  // SUPER_ADMIN (Pengurus Pusat)
  const superAdmin = await prisma.user.upsert({
    where: { email: 'superadmin@ldk-alfath.id' },
    update: {},
    create: {
      name: 'Super Admin Pusat',
      email: 'superadmin@ldk-alfath.id',
      passwordHash: await bcrypt.hash('Admin@1234', saltRounds),
      status: KaderStatus.ACTIVE,
      jabatan: KaderJabatan.INTI,
    },
  });

  const existingSuperAdminRole = await prisma.userRole.findFirst({
  where: {
    userId: superAdmin.id,
    role: UserRoleEnum.SUPER_ADMIN,
    scopeType: ScopeType.GLOBAL,
    scopeId: null,
  },
});

if (!existingSuperAdminRole) {
  await prisma.userRole.create({
    data: {
      userId: superAdmin.id,
      role: UserRoleEnum.SUPER_ADMIN,
      scopeType: ScopeType.GLOBAL,
      scopeId: null,
    },
  });
}

  // FACULTY_ADMIN — Informatika (akun Ketua)
  const facultyAdmin = await prisma.user.upsert({
    where: { email: 'ketua.informatika@ldk-alfath.id' },
    update: {},
    create: {
      name: 'Asep Kopling',
      email: 'ketua.informatika@ldk-alfath.id',
      passwordHash: await bcrypt.hash('Admin@1234', saltRounds),
      status: KaderStatus.ACTIVE,
      jabatan: KaderJabatan.INTI,
    },
  });

  await prisma.userRole.upsert({
    where: {
      userId_role_scopeType_scopeId: {
        userId: facultyAdmin.id,
        role: UserRoleEnum.FACULTY_ADMIN,
        scopeType: ScopeType.FACULTY,
        scopeId: fakultasInformatika.id,
      },
    },
    update: {},
    create: {
      userId: facultyAdmin.id,
      role: UserRoleEnum.FACULTY_ADMIN,
      scopeType: ScopeType.FACULTY,
      scopeId: fakultasInformatika.id,
    },
  });

  // Assign ketua ke bidang Kaderisasi
  await prisma.kaderBidang.upsert({
    where: {
      userId_bidangId: {
        userId: facultyAdmin.id,
        bidangId: bidangs[0].id, // Kaderisasi
      },
    },
    update: {},
    create: {
      userId: facultyAdmin.id,
      bidangId: bidangs[0].id,
    },
  });

  // KADER contoh — Informatika
  const kaderContoh = await prisma.user.upsert({
    where: { email: 'kader.contoh@ldk-alfath.id' },
    update: {},
    create: {
      name: 'Kader Contoh',
      email: 'kader.contoh@ldk-alfath.id',
      passwordHash: await bcrypt.hash('Kader@1234', saltRounds),
      status: KaderStatus.ACTIVE,
      jabatan: KaderJabatan.ANGGOTA,
      angkatan: 2023,
    },
  });

  await prisma.userRole.upsert({
    where: {
      userId_role_scopeType_scopeId: {
        userId: kaderContoh.id,
        role: UserRoleEnum.KADER,
        scopeType: ScopeType.FACULTY,
        scopeId: fakultasInformatika.id,
      },
    },
    update: {},
    create: {
      userId: kaderContoh.id,
      role: UserRoleEnum.KADER,
      scopeType: ScopeType.FACULTY,
      scopeId: fakultasInformatika.id,
    },
  });

  await prisma.kaderBidang.upsert({
    where: {
      userId_bidangId: {
        userId: kaderContoh.id,
        bidangId: bidangs[1].id, // Syiar
      },
    },
    update: {},
    create: {
      userId: kaderContoh.id,
      bidangId: bidangs[1].id,
    },
  });

  console.log('✅ Users seeded');

  // ===========================================================================
  // MUTABAAH TEMPLATE — item amalan baku
  // ===========================================================================

  const mutabaahItems = [
    { name: 'Shalat Subuh Berjamaah', maxScore: 7, order: 1 },
    { name: 'Shalat Dhuha', maxScore: 7, order: 2 },
    { name: 'Tilawah Al-Quran (min. 1 halaman)', maxScore: 7, order: 3 },
    { name: 'Shalat Tahajud', maxScore: 7, order: 4 },
    { name: 'Dzikir Pagi & Petang', maxScore: 7, order: 5 },
    { name: 'Puasa Sunnah (Senin/Kamis)', maxScore: 2, order: 6 },
    { name: 'Sedekah', maxScore: 7, order: 7 },
  ];

  await Promise.all(
    mutabaahItems.map((item) =>
      prisma.mutabaahTemplate.upsert({
        where: { id: `seed-mutabaah-${item.order}` },
        update: {},
        create: {
          id: `seed-mutabaah-${item.order}`,
          name: item.name,
          maxScore: item.maxScore,
          order: item.order,
          isActive: true,
        },
      }),
    ),
  );

  console.log('✅ MutabaahTemplate seeded');

  // ===========================================================================
  // SUMMARY
  // ===========================================================================

  console.log('\n🎉 Seeding selesai!');
  console.log('─────────────────────────────────────');
  console.log('Akun yang tersedia:');
  console.log('  SUPER_ADMIN  : superadmin@ldk-alfath.id / Admin@1234');
  console.log('  FACULTY_ADMIN: ketua.informatika@ldk-alfath.id / Admin@1234');
  console.log('  KADER        : kader.contoh@ldk-alfath.id / Kader@1234');
  console.log('─────────────────────────────────────');
  console.log(`Fakultas : ${fakultasInformatika.name}`);
  console.log(`Bidang   : ${bidangNames.join(', ')}`);
  console.log('─────────────────────────────────────');
}

main()
  .catch((e) => {
    console.error('❌ Seed error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
