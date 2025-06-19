/******************************************************************************************************
 * Objetivo: API para Registrar dados de personagens da empresa Walt Disney, realizar CRUD completo.
 * Data: 05/06/2024
 * Autor: Douglas Menezes
 * Versão: 1.0
 ********************************************************************************************************/

//Import das bibliotecas para criação da API
const express = require('express')
const cors = require('cors')

const personagemRoutes = require('./routes/personagemRoutes.js')

//Criação do app Express
const app = express()

// Configuração do CORS(Mais limpo do que o Passado em Aula)
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}))

// Permite o uso de JSON no corpo das requisições
app.use(express.json())

// Conexão com o arquivo de Rotas
app.use(personagemRoutes)

// Inicia o servidor na porta 8080
app.listen(8080, () => {
  console.log('Servidor aguardando novas requisições...')
})