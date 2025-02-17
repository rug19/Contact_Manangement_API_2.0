import prisma from "./prisma.js";

//Conect with the database
export async function initializeDb() {
  try {
    await prisma.$connect();
    console.log("Database connection successful!");
  } catch (error) {
    console.log("Error conecting to database", error);
  }
}
