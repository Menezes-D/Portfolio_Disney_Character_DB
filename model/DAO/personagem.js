/***********************************************************************************************************
 * Objetivo: Model responsável pelo CRUD de dados no BD
 * Data: 05/06/2025
 * Autor: Douglas Menezes
 * Versão: 1.0
 ************************************************************************************************************/

//Import da biblioteca de manipulação do SQL
const {PrismaClient} = require('../../generated/prisma')
const prisma = new PrismaClient()

//Função para Retornar todos os personagens
const selectAllCharacter = async function(){
    
    //Utilização de placeholder para evitar SQL Injection (Boa Prática)
    let personagens = await prisma.$queryRawUnsafe (
        `select * from tbl_character order by id desc`
    )

    if(personagens.length > 0)
        return personagens
    else
        return false
}

//Função para Buscar Personagem pelo Nome(Query Params) 
const selectByQueryCharacter = async function(nome){
    
    // Verifica se o nome está vazio ou inválido (nulo, undefined ou só espaços)
    if(!nome || nome.trim() === '')
        return false
   
    try {
       
        // Uso do operador LIKE que permite buscas parciais (ex: "Mic" encontra "Mickey")
        let queryCharacter = await prisma.$queryRaw 
        `select * from tbl_character where nome like ${'%' + nome + '%'}`
       
        // Se encontrar personagens, retorna o array de resultados, caso contrario, false
        return queryCharacter.length > 0 ? queryCharacter : false
    } catch (error) {
        console.error('Erro na query:', error)
        return false
    }
}

//Função para Retornar o Personagem com base no ID passado
const selectByIdCharacter = async function(id) {
    
    //Utilização de placeholder para evitar SQL Injection (Boa Prática)
    let personagem = await prisma.$queryRawUnsafe(
        `select * from tbl_character where id = ?`, id
    )

    if(personagem.length > 0)
        return personagem
    else
        return false
}

//Função para adicionar um novo Personagem ao BD
const insertCharacter = async function(personagem){

    // Monta a query SQL com placeholders (?) no lugar dos valores (Boa Prática)
    let newCharacter = await prisma.$executeRawUnsafe(`insert into tbl_character(nome,
                                                                        apelido,
                                                                        biografia,
                                                                        dataCriacao,
                                                                        localNascimento,
                                                                        vestimenta,
                                                                        fotoPerfil,
                                                                        especie,
                                                                        criador) values (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                                                                        // Passa os dados reais do personagem como parâmetros separados
                                                                        personagem.nome,
                                                                        personagem.apelido,
                                                                        personagem.biografia,
                                                                        personagem.dataCriacao,
                                                                        personagem.localNascimento,
                                                                        personagem.vestimenta,
                                                                        personagem.fotoPerfil,
                                                                        personagem.especie,
                                                                        personagem.criador)

    if(newCharacter)
        return true
    else
        return false
}

//Função para Deletar um Personagem do BD
const deleteCharacter = async function(id){
    
    //Utilização de placeholder para evitar SQL Injection (Boa Prática)
    let personagem = await prisma.$queryRawUnsafe(
        `delete from tbl_character where id = ? `,id
    )

    if(personagem)
        return true
    else
        return false
}

//Função para Atualizar um Personagem no BD
const updateCharacter = async function(personagem){

    // Query SQL com placeholders (?) para cada campo a ser atualizado
    let sql = `
        update tbl_character SET 
            nome            = ?, 
            apelido         = ?, 
            biografia       = ?, 
            dataCriacao     = ?, 
            localNascimento = ?, 
            vestimenta      = ?, 
            fotoPerfil      = ?, 
            especie         = ?, 
            criador         = ?
        WHERE id            = ?
    `
    // Execução da query, passando os dados reais do personagem como parâmetros
    let updatedCharacter = await prisma.$executeRawUnsafe(
        sql,
        personagem.nome,
        personagem.apelido,
        personagem.biografia,
        personagem.dataCriacao,
        personagem.localNascimento,
        personagem.vestimenta,
        personagem.fotoPerfil,
        personagem.especie,
        personagem.criador,
        personagem.id  //<- Identificador usado para localizar o personagem a ser atualizado
    )

    if(updatedCharacter)
        return true
    else
        return false
}

module.exports = {
    selectAllCharacter,
    selectByIdCharacter,
    insertCharacter,
    deleteCharacter,
    updateCharacter,
    selectByQueryCharacter
}