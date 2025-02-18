import { initializeDb } from "./config/initializeDb.js";
import express from "express";
import userRoutes from "./routes/userRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import swaggerDocs from "../swagger/swaggerConfig.js";

const app = express();

app.use(express.json());

//Routes
app.use("/auth", userRoutes);
app.use("/api", contactRoutes);

//Swagger
swaggerDocs(app);

//Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running in the port: ${PORT}`);
});

//Initialize the database
initializeDb();
