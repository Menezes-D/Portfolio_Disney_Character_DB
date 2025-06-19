🎬 API de Personagens de Desenhos (DisneyCharacter)

Este projeto é uma aplicação Back-End que expõe uma API RESTful para gerenciar personagens de desenhos animados (como os da Disney), utilizando o modelo MVC e o banco de dados MySQL.

📌 Objetivo

O principal objetivo deste projeto é permitir a realização de operações CRUD (Create, Read, Update, Delete) sobre personagens cadastrados em um banco de dados relacional.


🛠️ Tecnologias Utilizadas

Node.js (Ambiente de execução JavaScript)

Express.js (Framework web para rotas e middlewares)

MySQL (Banco de dados relacional)

Prisma ORM (Mapeamento objeto-relacional para facilitar a manipulação de dados)

Body-Parser (Para interpretar dados do corpo das requisições)


⚙️ Arquitetura do Projeto

O projeto segue a arquitetura MVC (Model - View - Controller) combinada com o padrão RESTful, o que proporciona uma organização clara e escalável da aplicação.
 
📁 /controller → Camada responsável pela lógica de negócio
📁 /model → DAO (Data Access Object) com comandos SQL
📁 /routes → Definição das rotas da API
📁 /modulo → Arquivos auxiliares e mensagens padrão
📁 /database → Script de criação do banco e tabelas
📁 /prisma → Configuração do ORM Prisma
📄 app.js → Arquivo principal da aplicação

====================================================================================================================

🚀 Como Executar o Projeto

1. Clone este repositório

2. Instale as dependências:

    |npm install express 

    |npm install cors

    |npm install prisma

    |npm install body-parser

    |npm install @prisma/client


3. Configure o banco de dados MySQL

4. Ajuste o arquivo .env com suas credenciais do banco

5. Execute o Prisma:

    |npx prisma generate

6. Rode o servidor:

    |node app.js


====================================================================================================================



📝 Licença
Este projeto é acadêmico e de uso livre para fins educacionais.
