import path from 'path';
import { defineConfig } from 'prisma/config';
import { config } from 'dotenv';

// Load .env dari folder backend secara eksplisit
config({ path: path.join(__dirname, '.env') });

export default defineConfig({
  earlyAccess: true,
  schema: path.join('prisma', 'schema.prisma'),
  datasource: {
    url: process.env.DATABASE_URL!,
  },
});