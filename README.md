# API NestJs Crud
Uma aplicação em que funciona por como princípio pelo CRUD(Create, Read, Update e Delete) onde se tem a opção de criar usuário, ver todos os usuários, ver usuário por id, atualizar seus dados e deletar o usuário.

## Como Começar
Para rodar a aplicação localmente, siga os passos abaixo:

### Pré-requisitos
- Docker, que pode ser baixado [aqui](https://www.docker.com/products/docker-desktop/) (escolha a versão compatível com seu sistema operacional).

### Instalação
1. Clone o repositório:
   > git clone [https://github.com/Gabrieelgc2/Projeto-Nestjs.git](https://github.com/Gabrieelgc2/Projeto-Nestjs.git)

2. Acesse o diretório:
   > cd users

3. Construa a aplicação com Docker Compose:
   > docker-compose up --build -d

4. Inicie a aplicação com:
   > docker-compose up

5. Caso queira desligar a aplicação:
   > docker compose down -v

## Acessando a Aplicação
- A aplicação está acessível em http://localhost:8080.

## Endpoints da API e Funcionalidades
Esta seção detalha as funcionalidades principais e seus respectivos endpoints.

1. Criar usuário(/create) - POST
Exemplo:

```
{         
"firstName" : "Gabriel",    
"lastName" : "Garcia",
"isActive" : true   

}
```

2. Listar todos os usuários - GET

3. Listar usuário com base no id (http:localhost:8080/id) - GET

4. Alterar informações do usuário (http:localhost:8080/id) - PUT
```
{
    "firstName" : "Andre",
    "lastName" : "Daniel",
    "isActive" : true
}
```
5. Deletar usuário (http:localhost:8080/id) - DEL

## Como acessar o banco de dados (MySQL)
1. > docker ps (para ver o nome dos containers)
2. > docker exec -it [nome do banco de dados, geralmente é users-db-1] sh
3. > mysql -u root -p | senha: root123
4. > SHOW DATABASES;
5. > USE teste;
6. > SHOW TABLES;
7. > SELECT * FROM user\G;

## Como acessar o Swagger
> Coloque em seu operador(Google, Opera) - localhost:8080/api

Stack de Tecnologia
- Backend: Nestjs

- Banco de Dados: MySQL

- Containerização: Docker, Docker Compose