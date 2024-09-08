# API-leituras
# API de Gerenciamento de Usuários e Livros

Esta API desenvolvida com Express permite o gerenciamento de leituras realizadas pelos usuários, além de autenticação de usuários. A documentação da API é fornecida pelo Swagger.

## Funcionalidades

### Autenticação

- **POST** `/api/auth/register` - Registra um novo usuário
- **POST** `/api/auth/login` - Realiza login do usuário

### Usuários

- **GET** `/` - Retorna todos os usuários
- **GET** `/{id}` - Retorna um usuário pelo ID
- **PUT** `/{id}` - Atualiza um usuário pelo ID
- **DELETE** `/{id}` - Deleta um usuário pelo ID

### Livros

- **GET** `/api/livros` - Obtém todos os livros
- **POST** `/api/livros` - Cria um novo livro
- **PUT** `/api/livros/{id}` - Atualiza o nome de um livro existente
- **DELETE** `/api/livros/{id}` - Deleta um livro pelo ID

## Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) 
