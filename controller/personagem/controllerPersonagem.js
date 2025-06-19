/************************************************************************************************************
 * Objetivo: Controller responsável pelo CRUD de dados
 * Data: 05/06/2025
 * Autor: Douglas Menezes
 * Versão: 1.0
 ***********************************************************************************************************/

//Import do arquivo DAO
const personagemDAO = require('../../model/DAO/personagem.js')
//Import do arquivo de mensagens de erro/acerto
const MESSAGE = require('../../modulo/config.js')

//Retornar todos os Personagens do BD
const listarPersonagens = async function(){

    let personagemJSON = {}
    //Chama a função do DAO ara retornar os livros
    let personagem = await personagemDAO.selectAllCharacter()

    if(personagem){
        //Cria um objeto JSON com caracteristicas de retorno
        personagemJSON.status = true
        personagemJSON.status_code = 200
        personagemJSON.character = personagem

        return personagemJSON
    }else{
        return MESSAGE.ERROR_NOT_FOUND //404
    }
}

//Buscar Filme via Query Params (Nome)
const filtrarPersonagem = async function(nome = ''){
    //console.log('Requisição recebia com:', {nome})

    //Verifica se nome está vazio ou contem apenas espaços
    // .trim utlizado para remover espaços em branco
    if(!nome || nome.trim() === ''){
        return MESSAGE.ERROR_REQUIRED_FIELDS
    }

     // Chama a função DAO que faz a consulta no banco com base no nome
    let dadosPersonagem = await personagemDAO.selectByQueryCharacter(nome)

    // Se a consulta retornar dados, monta o objeto de resposta com sucesso
    if(dadosPersonagem){
        return {
            status: true,
            status_code: 200,
            count: dadosPersonagem.length,
            character: dadosPersonagem
        }
    }else {
        return MESSAGE.ERROR_NOT_FOUND
    }
}

//Retornar o Personagem filtrando pelo ID
const buscarIdPersonagem = async function(id){

    // Verifica se o ID é inválido (vazio, nulo, indefinido ou não numérico)
    // .trim utlizado para remover espaços em branco
    if(id.trim() === '' || id == null || id == undefined || isNaN(id)){
        return MESSAGE.ERROR_REQUIRED_FIELDS 
    }else{
        let personagemJSON = {}

        let personagem = await personagemDAO.selectByIdCharacter(id)

        if(personagem){
            personagemJSON.status = true
            personagemJSON.status_code = 200
            personagemJSON.character = personagem

            return personagemJSON
        }else {
            return MESSAGE.ERROR_NOT_FOUND
        }
    }
}

//Adicionar um novo Personagem ao BD
const inserirPersonagem = async function(personagem, contentType) {
    
    // Verifica se o Content-Type da requisição é "application/json"
    if(String(contentType).toLowerCase() == 'application/json'){
         // Validação dos campos obrigatórios e limites máximos de caracteres
        if( personagem.nome            == '' || personagem.nome            == null || personagem.nome            == undefined || String(personagem.nome).length > 100           ||
            personagem.apelido         == '' || personagem.apelido         == null || personagem.apelido         == undefined || String(personagem.apelido).length > 100        ||
            personagem.biografia       == '' || personagem.biografia       == null || personagem.biografia       == undefined || String(personagem.biografia).length > 500      ||
            personagem.dataCriacao     == '' || personagem.dataCriacao     == null || personagem.dataCriacao     == undefined                                                   ||
            personagem.localNascimento == '' || personagem.localNascimento == null || personagem.localNascimento == undefined || String(personagem.localNascimento).length > 50 ||
            personagem.vestimenta      == '' || personagem.vestimenta      == null || personagem.vestimenta      == undefined || String(personagem.vestimenta).length > 500     ||
            personagem.fotoPerfil      == '' || personagem.fotoPerfil      == null || personagem.fotoPerfil      == undefined || String(personagem.fotoPerfil).length > 200     ||
            personagem.especie         == '' || personagem.especie         == null || personagem.especie         == undefined || String(personagem.especie).length > 100        ||      
            personagem.criador         == '' || personagem.criador         == null || personagem.criador         == undefined || String(personagem.criador).length > 100  
        ){
            return MESSAGE>ERROR_REQUIRED_FIELDS
        }else {
            let novoPersonagem = await personagemDAO.insertCharacter(personagem)

            if(novoPersonagem)
                return MESSAGE.SUCCESS_CREATED_ITEM //201
            else
                return MESSAGE.ERROR_INTERNAL_SERVER //500
        }
    }else{
        return MESSAGE.ERROR_CONTENT_TYPE //415
    }
}

//Deletar um Personagem do BD
const deletarPersonagem = async function(id) {
    
    //Validação para o ID
    if(id == '' || id == null || id == undefined || isNaN(id)){
        return MESSAGE.ERROR_REQUIRED_FIELDS //400
    }else{
        //validação para verificar se o ID existe
        let dadosPersonagem = await personagemDAO.selectByIdCharacter(id)

        if(dadosPersonagem){

            //Deleta o Personagem do BD
            let personagem = await personagemDAO.deleteCharacter(id)

            if(personagem)
                return MESSAGE.SUCCESS_DELETE_ITEM //200
            else
                return MESSAGE.ERROR_INTERNAL_SERVER //500
        }else{
            return MESSAGE.ERROR_NOT_FOUND
        }
    }
}

//Atualizar um Personagem do BD
const atualizarPersonagem = async function(personagem, id, contentType){

     // Verifica se o Content-Type da requisição é "application/json"
    if(String(contentType).toLowerCase() == 'application/json'){
        // Validação dos campos obrigatórios e limites máximos de caracteres
        if( personagem.nome            == '' || personagem.nome            == null || personagem.nome            == undefined || String(personagem.nome).length > 100           ||
            personagem.apelido         == '' || personagem.apelido         == null || personagem.apelido         == undefined || String(personagem.apelido).length > 100        ||
            personagem.biografia       == '' || personagem.biografia       == null || personagem.biografia       == undefined || String(personagem.biografia).length > 500      ||
            personagem.dataCriacao     == '' || personagem.dataCriacao     == null || personagem.dataCriacao     == undefined                                                   ||
            personagem.localNascimento == '' || personagem.localNascimento == null || personagem.localNascimento == undefined || String(personagem.localNascimento).length > 50 ||
            personagem.vestimenta      == '' || personagem.vestimenta      == null || personagem.vestimenta      == undefined || String(personagem.vestimenta).length > 500     ||
            personagem.fotoPerfil      == '' || personagem.fotoPerfil      == null || personagem.fotoPerfil      == undefined || String(personagem.fotoPerfil).length > 200     ||
            personagem.especie         == '' || personagem.especie         == null || personagem.especie         == undefined || String(personagem.especie).length > 100        ||      
            personagem.criador         == '' || personagem.criador         == null || personagem.criador         == undefined || String(personagem.criador).length > 100  
        ){
            return MESSAGE.ERROR_REQUIRED_FIELDS //400
        }else{
        //Verifica se o ID existe no BD
        let dadosPersonagem = await personagemDAO.selectByIdCharacter(id)

        if(dadosPersonagem){
                // Adiciona o ID ao objeto do personagem para realizar a atualização
                personagem.id = id

                // Executa a atualização chamando a função DAO
                let updatedCharacter = await personagemDAO.updateCharacter(personagem)

                if(updatedCharacter)
                    return MESSAGE.SUCCESS_UPDATED_ITEM//200
                else
                    return MESSAGE.ERROR_INTERNAL_SERVER//500
            }else{
                return MESSAGE.ERROR_NOT_FOUND//404
            }
        }
    }else{
       // Retorna erro caso o Content-Type da requisição não seja JSON
       return MESSAGE.ERROR_CONTENT_TYPE//415
    }
}




module.exports = {
    listarPersonagens,
    buscarIdPersonagem,
    inserirPersonagem,
    deletarPersonagem,
    atualizarPersonagem,
    filtrarPersonagem
}