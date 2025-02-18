import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import express from "express";
import "./swaggerDefinitons.js";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Contact Management API",
      version: "1.0.0",
      description: "API for managing contacts",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [{ bearerAuth: [] }],
  },
  apis: ["./src/routes/*.js", "./src/controllers/*.js"], // Caminho para os arquivos de rotas e controladores
};

const specs = swaggerJsdoc(options);

const swaggerDocs = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
};

export default swaggerDocs;
