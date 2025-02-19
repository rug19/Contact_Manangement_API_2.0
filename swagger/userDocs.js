const userDocs = {
  "/auth/register": {
    post: {
      summary: "Register a new user",
      description: "Add a new user to the database",
      tags: ["Users"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
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
              required: ["name", "email", "password"],
              example: {
                name: "Jane Doe",
                email: "jane.doe@example.com",
                password: "password123",
              },
            },
          },
        },
      },
      responses: {
        201: {
          description: "User registered successfully",
        },
        400: {
          description: "Invalid input",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Invalid input",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  "/auth/login": {
    post: {
      summary: "Login a user",
      description: "Authenticate a user and return a token",
      tags: ["Users"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
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
              required: ["email", "password"],
            },
          },
        },
      },
      responses: {
        200: {
          description: "User logged in successfully",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  token: {
                    type: "string",
                    description: "JWT token",
                  },
                },
              },
            },
          },
        },
        400: {
          description: "Invalid credentials",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Invalid credentials",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

export default userDocs;
