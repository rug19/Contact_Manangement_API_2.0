import request from "supertest";
import { PrismaClient } from "@prisma/client";
import { app } from "../src/server.js";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

beforeEach(async () => {
  await prisma.user.deleteMany();
});

afterAll(async () => {
  await prisma.$disconnect();
});

describe("Testes da API de Usuários", () => {
  test("Deve criar um novo usuário", async () => {
    const response = await request(app).post("/auth/register").send({
      name: "Teste User",
      email: "teste@example.com",
      password: "1234",
    });

    expect(response.status).toBe(201);
    expect(response.body.name).toBe("Teste User");
    expect(response.body.email).toBe("teste@example.com");
    // Não verificar a senha em texto plano
    expect(response.body).not.toHaveProperty("password");

    // Verificar se o usuário foi salvo no banco de dados
    const user = await prisma.user.findUnique({
      where: { email: "teste@example.com" },
    });

    expect(user).not.toBeNull();
    expect(user.name).toBe("Teste User");
    expect(user.email).toBe("teste@example.com");
    // Verificar se a senha foi armazenada como hash
    const isPasswordValid = await bcrypt.compare("1234", user.password);
    expect(isPasswordValid).toBe(true);
  });
});
