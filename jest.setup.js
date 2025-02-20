import { PrismaClient } from "@prisma/client";
import { execSync } from "child_process";
import dotenv from "dotenv";

dotenv.config({ path: ".env.test" });

const prisma = new PrismaClient();

// Antes de rodar os testes, aplicamos as migrações no banco de testes
beforeAll(async () => {
  execSync("npx prisma migrate deploy", { stdio: "inherit" }); // Aplica as migrações
});

// Antes de cada teste, limpamos o banco para evitar interferências
beforeEach(async () => {
  const tables =
    await prisma.$queryRaw`SELECT name FROM sqlite_master WHERE type='table'`;
  for (const { name } of tables) {
    if (name !== "_prisma_migrations") {
      await prisma.$executeRawUnsafe(`DELETE FROM "${name}";`);
    }
  }
});

// Depois de rodar todos os testes, desconectamos o Prisma
afterAll(async () => {
  await prisma.$disconnect();
});
