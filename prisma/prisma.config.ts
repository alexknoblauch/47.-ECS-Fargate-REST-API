import { PrismaClient } from "./generated/client/client";
import { PrismaPg } from '@prisma/adapter-pg'; 
import { Pool } from 'pg'; 
import config from '../src/config'



//npm install @prisma/adapter-pg
//npm install pg
//npm install @types/pg --save-dev

const pool = new Pool({
  connectionString: config.DATABASE_URL,
});

const adapter = new PrismaPg(pool);

export const prisma = new PrismaClient({adapter})