# 🚀 NestJS CRUD API

## 🧑‍💻 Building Robust RESTful APIs

This application is a straightforward RESTful API built with **NestJS** that strictly adheres to the **CRUD** principle (**Create, Read, Update, Delete**) for managing user entities. It provides the essential endpoints needed to: create a new user, retrieve all users, view a user by ID, modify user data, and delete a user.

<p align="center">
    <a href="READMEpt-br.md">🇧🇷 Portuguese Brazilian Version</a>
</p>

---

## 🛠️ Tech Stack

This project leverages modern and powerful technologies for a robust backend and streamlined deployment:

| Category | Technology | Description |
| :--- | :--- | :--- |
| **Backend Framework** | **NestJS** | A progressive Node.js framework for building efficient, reliable, and scalable server-side applications. |
| **Database** | **MySQL** | The relational database used for persistence of user data. |
| **Containerization** | **Docker & Docker Compose** | Used to set up the application and database environments quickly and consistently. |

---

## ⚙️ Getting Started

To run the application locally, follow the steps below. The project is fully containerized, simplifying setup.

### Prerequisites

* **Docker:** Download and install [Docker Desktop](https://www.docker.com/products/docker-desktop).

### Installation and Execution

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Gabrieelgc2/Projeto-Nestjs.git](https://github.com/Gabrieelgc2/Projeto-Nestjs.git)
    ```

2.  **Navigate to the project directory (users):**
    ```bash
    cd users
    ```

3.  **Build and start the application/database in detached mode (`-d`):**
    ```bash
    docker compose up --build -d
    ```
4.  **To view logs or run in the foreground (optional):**
    ```bash
    docker compose up
    ```

5.  **Stop and remove containers (including volumes, if using `-v`):**
    ```bash
    docker compose down -v
    ```

### 🌐 Accessing the Application

The NestJS API will be accessible at:
**`http://localhost:8080`**

---

## 📑 API Documentation (Swagger)

For a complete interactive overview of the available endpoints, models, and easy testing:

> **Access the Swagger documentation at:**
> **`http://localhost:8080/api`**

---

## 🔗 API Endpoints and Functionalities

This section summarizes the core CRUD operations available via the API.

| Operation | Method | Endpoint | Description |
| :--- | :--- | :--- | :--- |
| **Create** | `POST` | `/create` | Creates a new user in the database. |
| **Read All** | `GET` | `/` | Retrieves a list of all registered users. |
| **Read by ID**| `GET` | `/:id` | Retrieves a single user based on their unique ID. |
| **Update** | `PUT` | `/:id` | Updates the data for a specified user ID. |
| **Delete** | `DELETE` | `/:id` | Deletes the user associated with the given ID. |

### 📝 Example Payloads

#### **1. Create User (`POST /create`)**
```json
{
  "firstName": "Gabriel",
  "lastName": "Garcia",
  "isActive": true
}
````

#### **4. Update User (`PUT /:id`)**

```json
{
  "firstName": "Andre",
  "lastName": "Daniel",
  "isActive": true
}
```

-----

## 🗃️ Accessing the Database (MySQL)

You can directly connect to the MySQL container to inspect the data:

1.  **List running containers:**

    ```bash
    docker ps
    ```

    (The database container is typically named `users-db-1`).

2.  **Access the database container shell:**

    ```bash
    docker exec -it [container_name] sh
    ```

3.  **Log in to the MySQL client:**

    ```bash
    mysql -u root -p
    ```

    > **Password:** `root123`

4.  **Useful SQL Commands:**

    ```sql
    mysql> SHOW DATABASES;
    mysql> USE teste;  -- Use the desired database
    mysql> SHOW tables;
    mysql> SELECT * FROM user\G; -- Query the user table
    ```
