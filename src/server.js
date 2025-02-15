import { initializeDb } from "./config/initializeDb.js";
import express from "express";
import userRoutes from "./routes/userRoutes.js"
 


const app = express();

//Eneble 
app.use(express.json());

//Routes

app.use("/api", userRoutes);


//Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

//Initialize the database
initializeDb();

