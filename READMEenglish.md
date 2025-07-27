# NestJS CRUD API

An application that follows the CRUD principle (Create, Read, Update, Delete), allowing you to create a user, view all users, view a user by ID, update user data, and delete a user.

## Getting Started

To run the application locally, follow the steps below:

### Prerequisites

- Docker: Download it [here](https://www.docker.com/products/docker-desktop) (choose the version compatible with your OS).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Gabrieelgc2/Projeto-Nestjs.git

2. Go to the project directory:
    ```bash
    cd users
3. Build the application using Docker compose:
    ```bash
    docker compose up --build -d
4. Start the application:
    ```bash
    docker compose up
5. Stop the application:
    ```bash
    docker compose down -v

## Accessing the Application

The application will be available at:  
[http://localhost:8080](http://localhost:8080)

---

## API Endpoints and Functionalities

This section describes the main functionalities and their respective endpoints.

### 1. Create user (`/create`) - `POST`

**Example:**
```json
{
  "firstName": "Gabriel",
  "lastName": "Garcia",
  "isActive": true
} 
```

### 2. List all users - `GET`  

### 3. Get user by ID - `GET`
**Endpoint:** `id`

### 4. Update user by ID - `PUT`  
**Endpoint:** `/id`  
**Example:**
```json
{
  "firstName": "Andre",
  "lastName": "Daniel",
  "isActive": true
}
```
### 5. Delete user by ID - DELETE
Endpoint: `/id`

## Accessing the Database (MySQL)

### 1. List running containers:
```bash
docker ps
```

### 2. Access the database container (usually named users-db-1):
```bash
docker exec -it [container_name] sh
```

### 3. Login to MYSQL:
```bash
mysql -u root -p
```
Password: `root123`

### 4. Show available databases
```bash
SHOW DATABASES;
```

### 5. Use the desired database:
```bash
USE teste;
```

### 6. Show tables:

```bash
SHOW tables;
```

### 7. Query user the table:

```bash
SELECT * FROM user\G;
```

### Acessing Swagger
> To access the Swagger documentation, open:
http://localhost:8080/api

### Tech Stack:
- Back end: Nestjs
- Database: MYSQL    
- Containerization: Docker with Docker compose