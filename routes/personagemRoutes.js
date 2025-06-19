/******************************************************************************************************
 * Objetivo: Responsável por gerir rotas de acesso da API
 * Data: 05/06/2025
 * Autor: Douglas Menezes
 * Versão: 1.0
 ********************************************************************************************************/

const express = require('express')
const controllerPersonagem = require('../controller/personagem/controllerPersonagem.js')
const bodyParser = require('body-parser')

//Padroniza o tipo de dados do body para o JSON
const bodyParserJSON = bodyParser.json()

const router = express.Router()

//Rota para retornar todos os Personagens do BD
router.get('/v1/disney/personagem', async function(req, res, next){

    //Chama a função que retorna todos os Personagens
    let dadosPersonagem = await controllerPersonagem.listarPersonagens()

    res.status(dadosPersonagem.status_code)
    res.json(dadosPersonagem)
})

//Rota para retornar personagem pelo ID
router.get('/v1/disney/personagem/:id', async function(req, res, next){

    //Recebe a variavel via params
    let idPersonagem = req.params.id

    let dadosPersonagem = await controllerPersonagem.buscarIdPersonagem(idPersonagem)

    res.status(dadosPersonagem.status_code)
    res.json(dadosPersonagem)
})

//Rota para Inserir um novo Personagem
router.post('/v1/disney/personagem', bodyParserJSON, async function(req, res) {
    
    //Recebe o content type da requisição
    let contentType = req.headers['content-type']
    //Recebe os dados do body da requisição
    let dadosBody = req.body

    let newCharacter = await controllerPersonagem.inserirPersonagem(dadosBody, contentType)

    res.status(newCharacter.status_code)
    res.json(newCharacter)
})

//Rota para Deletar um Personagem
router.delete('/v1/disney/personagem/:id', async function(req, res) {
    let idPersonagem = req.params.id

    let deletedCharacter = await controllerPersonagem.deletarPersonagem(idPersonagem)

    res.status(deletedCharacter.status_code)
    res.json(deletedCharacter)
})

//Rota para Atualizar um Personagem 
router.put('/v1/disney/personagem/:id', bodyParserJSON, async function(req, res){

    //Recebe o content-type da requisição
    let contentType = req.headers['content-type']
    //Recebe o ID do Livro
    let idPersonagem = req.params.id
    //Recebe os dados do Body
    let dadosBody = req.body

    let updatedCharacter = await controllerPersonagem.atualizarPersonagem(dadosBody, idPersonagem, contentType)

    res.status(updatedCharacter.status_code)
    res.json(updatedCharacter)
})



module.exports = router