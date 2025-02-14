import prisma from "./config/prisma.js";

async function testDataBaseConection(){
    try {
        await prisma.$connect();
        console.log("Conexão com o banco de dados bem-sucedida!");
    } catch(error){
        console.log("Erro ao conectar ao banco de dados", error);
    }
}

testDataBaseConection();