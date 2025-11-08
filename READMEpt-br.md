# 🚀 NestJS CRUD API

## 🧑‍💻 Construindo APIs RESTful Robustas

Esta aplicação é uma API RESTful direta construída com **NestJS** que adere estritamente ao princípio **CRUD** (**Criar, Ler, Atualizar, Excluir**) para o gerenciamento de entidades de usuário. Ela fornece os *endpoints* essenciais necessários para: criar um novo usuário, recuperar todos os usuários, visualizar um usuário por ID, modificar dados de um usuário e excluir um usuário.

<p align="center">
    <a href="README.md">🇧🇷 Versão em Inglês (U.S)</a>
</p>

---

## 🛠️ Stack de Tecnologia

Este projeto utiliza tecnologias modernas e poderosas para um *backend* robusto e uma implantação simplificada:

| Categoria | Tecnologia | Descrição |
| :--- | :--- | :--- |
| **Framework Backend** | **NestJS** | Um *framework* Node.js progressivo para construir aplicações *server-side* eficientes, confiáveis e escaláveis. |
| **Banco de Dados** | **MySQL** | O banco de dados relacional usado para persistência dos dados de usuário. |
| **Containerização** | **Docker & Docker Compose** | Usados para configurar os ambientes da aplicação e do banco de dados de forma rápida e consistente. |

---

## ⚙️ Guia de Inicialização

Para rodar a aplicação localmente, siga os passos abaixo. O projeto é totalmente containerizado, simplificando a configuração.

### Pré-requisitos

* **Docker:** Baixe e instale o [Docker Desktop](https://www.docker.com/products/docker-desktop).

### Instalação e Execução

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/Gabrieelgc2/Projeto-Nestjs.git](https://github.com/Gabrieelgc2/Projeto-Nestjs.git)
    ```

2.  **Navegue até o diretório do projeto (`users`):**
    ```bash
    cd users
    ```

3.  **Construa e inicie a aplicação/banco de dados em modo *detached* (`-d`):**
    ```bash
    docker compose up --build -d
    ```
4.  **Para visualizar logs ou rodar em primeiro plano (opcional):**
    ```bash
    docker compose up
    ```

5.  **Pare e remova os contêineres (incluindo volumes, se usar `-v`):**
    ```bash
    docker compose down -v
    ```

### 🌐 Acesso à Aplicação

A API NestJS estará acessível em:
**`http://localhost:8080`**

---

## 📑 Documentação da API (Swagger)

Para uma visão geral interativa completa dos *endpoints* disponíveis, modelos e testes fáceis:

> **Acesse a documentação do Swagger em:**
> **`http://localhost:8080/api`**

---

## 🔗 Endpoints da API e Funcionalidades

Esta seção resume as operações CRUD principais disponíveis via API.

| Operação | Método | Endpoint | Descrição |
| :--- | :--- | :--- | :--- |
| **Criar** | `POST` | `/create` | Cria um novo usuário no banco de dados. |
| **Ler Todos** | `GET` | `/` | Recupera uma lista de todos os usuários registrados. |
| **Ler por ID**| `GET` | `/:id` | Recupera um único usuário com base em seu ID exclusivo. |
| **Atualizar** | `PUT` | `/:id` | Atualiza os dados para um ID de usuário especificado. |
| **Excluir** | `DELETE` | `/:id` | Exclui o usuário associado ao ID fornecido. |

### 📝 Exemplos de *Payloads*

#### **1. Criar Usuário (`POST /create`)**
```json
{
  "firstName": "Gabriel",
  "lastName": "Garcia",
  "isActive": true
}
````

#### **4. Atualizar Usuário (`PUT /:id`)**

```json
{
  "firstName": "Andre",
  "lastName": "Daniel",
  "isActive": true
}
```

-----

## 🗃️ Acessando o Banco de Dados (MySQL)

Você pode se conectar diretamente ao contêiner MySQL para inspecionar os dados:

1.  **Liste os contêineres em execução:**

    ```bash
    docker ps
    ```

    (O contêiner do banco de dados é geralmente nomeado `users-db-1`).

2.  **Acesse o *shell* do contêiner do banco de dados:**

    ```bash
    docker exec -it [nome_do_container] sh
    ```

3.  **Faça login no cliente MySQL:**

    ```bash
    mysql -u root -p
    ```

    > **Senha:** `root123`

4.  **Comandos SQL Úteis:**

    ```sql
    mysql> SHOW DATABASES;
    mysql> USE teste;  -- Use o banco de dados desejado
    mysql> SHOW tables;
    mysql> SELECT * FROM user\G; -- Consulta a tabela de usuários
    ```
