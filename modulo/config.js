/******************************************************************************************************************
 * Objetivo: Arquivo de configuração de mensagens de erros ou acertos
 * Data: 26/05/2025
 * Autor: Douglas Menezes
 * Versão: 1.0
 ******************************************************************************************************************/

const ERROR_NOT_FOUND         =  {status: false, status_code: 404, message: 'Nenhum Personagem foi encontrado!!!'}
const ERROR_REQUIRED_FIELDS =   {status: false, status_code: 400, message: 'Não foi possivel processar a requisição pois os dados encaminhados não são válidos ou não foram encaminhados!!!'}
const ERROR_INTERNAL_SERVER =   {status: false, status_code: 500, message: 'Não foi possivel processar a requisição pois houveram erros internos no servidor!!!'}
const ERROR_CONTENT_TYPE    =   {status: false, status_code: 415, message: 'Não foi possivel processar a requisição pois o tipo de dados do body deve ser apenas JSON!!!'}

const SUCCESS_CREATED_ITEM  =   {status: true, status_code: 201, message: 'Persoangem adicionado com sucesso!!!'}
const SUCCESS_UPDATED_ITEM  =   {status: true, status_code: 200, message: 'Personagem atualizado com sucesso!!!'}
const SUCCESS_DELETE_ITEM   =   {status: true, status_code: 200, message: 'Personagem excluido com sucesso!!!'}


module.exports = {
    ERROR_NOT_FOUND,
    ERROR_REQUIRED_FIELDS,
    ERROR_INTERNAL_SERVER,
    SUCCESS_CREATED_ITEM,
    SUCCESS_DELETE_ITEM,
    SUCCESS_UPDATED_ITEM,
    ERROR_CONTENT_TYPE
}