# Contact Management API

## Description

The **Contact Management API** is a RESTful API that allows users to manage their contacts efficiently. It provides endpoints to create, read, update, and delete contacts.

## Features

- **Create Contact**: Add a new contact to the system.
- **List Contacts**: Retrieve all stored contacts.
- **Get Contact by ID**: Fetch details of a specific contact.
- **Update Contact**: Modify an existing contact's information.
- **Delete Contact**: Remove a contact from the system.
- **User Registration**: Register a new user.
- **User Login**: Authenticate a user and obtain a token.

## Technologies Used

- **Language**: JavaScript
- **Runtime**: Node.js
- **Framework**: Express
- **ORM**: Prisma
- **Database**: MySQL
- **Documentation**: Swagger

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/rug19/Contact_Manangement_API_2.0.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Contact_Management_API
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Configure the database by creating a `.env` file.
5. Run database migrations:
   ```bash
   npx prisma migrate dev
   ```
6. Start the application:
   ```bash
   npm run dev
   ```

## Configuration

Create a `.env` file in the root directory and add the following environment variables:

```env
DATABASE_URL="mysql://your_username:your_password@localhost:3306/database_name"
JWT_SECRET=your_jwt_secret
```

## API Endpoints

The API documentation is available via Swagger. To access the Swagger UI, start the application and navigate to:

```
http://localhost:3000/api-docs
```

### User Endpoints

| Method | Endpoint        | Description                             |
|--------|----------------|-----------------------------------------|
| POST   | `/auth/register` | Register a new user                     |
| POST   | `/auth/login`    | Authenticate a user and obtain a token |

### Contact Endpoints

| Method | Endpoint          | Description                  |
|--------|------------------|------------------------------|
| GET    | `/api/contacts`     | Retrieve all contacts        |
| POST   | `/api/contacts`     | Create a new contact         |
| GET    | `/api/contacts/{id}` | Retrieve a specific contact |
| PUT    | `/api/contacts/{id}` | Update a specific contact   |
| DELETE | `/api/contacts/{id}` | Delete a specific contact   |

## Usage

To start the development server, use:

```bash
npm run dev
```

## Contribution

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b my-feature
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add my feature"
   ```
4. Push the changes:
   ```bash
   git push origin my-feature
   ```
5. Open a Pull Request.

## License

This project is licensed under the **MIT License**.

