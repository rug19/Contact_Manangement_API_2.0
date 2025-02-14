import prisma from "./prisma.js";

//Conect with the database
export async function initializeDb() {
  try {
    await prisma.$connect();
    console.log("Conexão com o banco de dados bem-sucedida!");
  } catch (error) {
    console.log("Erro ao conectar ao banco de dados", error);
  }
}
