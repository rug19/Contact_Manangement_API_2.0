const contactDocs = {
  "/api/contacts": {
    //Get all the contacts
    get: {
      summary: "Get all contacts",
      description: "Retrieve a list of contacts",
      tags: ["Contacts"],
      security: [
        {
          bearerAuth: [],
        },
      ],
      responses: {
        200: {
          description: "List of contacts",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/Contact",
                },
              },
            },
          },
        },
        400: {
          description: "Error retrieving contacts",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Error retrieving contacts",
                  },
                },
              },
            },
          },
        },
        401: {
          description: "Unauthorized",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Access denied. Token not provided.",
                  },
                },
              },
            },
          },
        },
        404: {
          description: "No contacts found",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "No contacts found",
                  },
                },
              },
            },
          },
        },
      },
    },
    //Create a new Contact
    post: {
      summary: "Create a new contact",
      description: "Add a new contact to the database",
      tags: ["Contacts"],
      security: [
        {
          bearerAuth: [],
        },
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
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
              required: ["name", "email", "phone"],
              example: {
                name: "John Doe",
                email: "john.doe@example.com",
                phone: "123456789",
              },
            },
          },
        },
      },
      responses: {
        201: {
          description: "Contact created successfully",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Contact",
              },
            },
          },
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
        401: {
          description: "Unauthorized",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Access denied. Token not provided.",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  //Get contact by id
  "/api/contacts/{id}": {
    get: {
      summary: "Get a single contact",
      description: "Retrieve a contact by its ID",
      tags: ["Contacts"],
      security: [
        {
          bearerAuth: [],
        },
      ],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: {
            type: "string",
            format: "uuid",
          },
          description: "The ID of the contact",
        },
      ],
      responses: {
        200: {
          description: "Contact details",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Contact",
              },
            },
          },
        },
        400: {
          description: "Invalid ID supplied",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Invalid ID supplied",
                  },
                },
              },
            },
          },
        },
        401: {
          description: "Unauthorized",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Access denied. Token not provided.",
                  },
                },
              },
            },
          },
        },
        404: {
          description: "Contact not found",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Contact not found",
                  },
                },
              },
            },
          },
        },
      },
    },
    //Update the contact
    put: {
      summary: "Update a contact",
      description: "Update an existing contact in the database",
      tags: ["Contacts"],
      security: [
        {
          bearerAuth: [],
        },
      ],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: {
            type: "string",
            format: "uuid",
          },
          description: "The ID of the contact to update",
        },
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
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
              required: ["name", "email", "phone"],
              example: {
                name: "John Doe",
                email: "john.doe@example.com",
                phone: "123456789",
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "Contact updated successfully",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Contact",
              },
            },
          },
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
        401: {
          description: "Unauthorized",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Access denied. Token not provided.",
                  },
                },
              },
            },
          },
        },
        404: {
          description: "Contact not found",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Contact not found",
                  },
                },
              },
            },
          },
        },
      },
    },
    //Delete the contact
    delete: {
      summary: "Delete a contact",
      description: "Remove a contact from the database",
      tags: ["Contacts"],
      security: [
        {
          bearerAuth: [],
        },
      ],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: {
            type: "string",
            format: "uuid",
          },
          description: "The ID of the contact to delete",
        },
      ],
      responses: {
        204: {
          description: "Contact deleted successfully",
        },
        400: {
          description: "Invalid ID supplied",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Invalid ID supplied",
                  },
                },
              },
            },
          },
        },
        401: {
          description: "Unauthorized",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Access denied. Token not provided.",
                  },
                },
              },
            },
          },
        },
        404: {
          description: "Contact not found",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Contact not found",
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

export default contactDocs;