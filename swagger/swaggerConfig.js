import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import express from "express";
import contactDocs from "../swagger/contactsDocs.js";
import userDocs from "./userDocs.js";

//API's definition
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
      schemas: {
        Contact: {
          type: "object",
          properties: {
            id: {
              type: "string",
              format: "uuid",
              description: "The auto-generated ID of the contact",
            },
            name: {
              type: "string",
              description: "The name of the contact",
            },
            email: {
              type: "string",
              format: "email",
              description: "The email of the contact",
            },
            phone: {
              type: "string",
              description: "The phone number of the contact",
            },
          },
        },
        User: {
          type: "object",
          properties: {
            id: {
              type: "integer",
              description: "The auto-generated ID of the user",
            },
            name: {
              type: "string",
              description: "The name of the user",
            },
            email: {
              type: "string",
              format: "email",
              description: "The email of the user",
            },
            password: {
              type: "string",
              description: "The password of the user",
            },
          },
        },
      },
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [{ bearerAuth: [] }],
    paths: {
      ...contactDocs, ...userDocs,
    },
  },
  apis: [], // Caminho para arquivos de rotas se usar JSDoc
};

//generate the documentation from options's definitions
const specs = swaggerJsdoc(options);

const swaggerDocs = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
};

export default swaggerDocs;
