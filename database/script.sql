/******************************************************************************************************
 * Objetivo: Script de criação do Banco e das Tabelas
 * Data: 05/06/2025
 * Autor: Douglas Menezes
 * Versão: 1.0
 ********************************************************************************************************/


-- Criação do banco de dados
CREATE DATABASE IF NOT EXISTS db_walt_disney;

-- Seleciona o banco para uso
USE db_walt_disney;

-- Criação da tabela de personagens
CREATE TABLE IF NOT EXISTS tbl_character (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    apelido VARCHAR(100),
    biografia TEXT NOT NULL,
    dataCriacao DATE NOT NULL,
    localNascimento VARCHAR(50) NOT NULL,
    vestimenta TEXT NOT NULL,
    fotoPerfil VARCHAR(200),
    especie VARCHAR(100),
    criador VARCHAR(100)
);

-- Consulta de teste
SELECT * FROM tbl_character;

-- Inserção de personagens
INSERT INTO tbl_character 
(nome, apelido, biografia, dataCriacao, localNascimento, vestimenta, fotoPerfil, especie, criador) 
VALUES
('Michael Theodore Mouse','Mickey Mouse','Mickey Mouse é o personagem icônico criado por Walt Disney e Ub Iwerks em 1928. Ele é um camundongo alegre, corajoso e cheio de energia, conhecido mundialmente como o mascote da Disney. Mickey apareceu pela primeira vez no curta-metragem “Steamboat Willie” e desde então se tornou símbolo de diversão, amizade e otimismo, conquistando fãs de todas as idades ao redor do mundo.','1928-11-18','Estados Unidos','Shorts vermelhos, luvas brancas e sapatos grandes','https://static.wikia.nocookie.net/disney/images/b/bf/Mickey_Mouse_Disney_1.png/revision/latest?cb=20240329213035&path-prefix=pt-br','Camundongo','Walt Disney & Ub Iwerks'),
('José Carioca','Zé Carioca','Zé Carioca é um papagaio brasileiro criado pela Disney em 1942. Ele foi apresentado ao mundo no filme Alô, Amigos como um símbolo do Brasil durante a política de boa vizinhança entre os Estados Unidos e a América Latina. Zé é esperto, carismático e amante do samba, do futebol e da malandragem carioca. Vive no Rio de Janeiro e representa o típico “malandro do bem”, sempre se virando com criatividade e bom humor.','1942-02-06','Rio de Janeiro, Brasil','Terno verde e chapéu Panamá','https://static.wikia.nocookie.net/disney/images/c/c8/Ze-carioca.jpg/revision/latest?cb=20150511191537&path-prefix=pt-br','Papagaio','Walt Disney & J. Carlos'),
('Jiminy Cricket (Grilo Falante)','Jiminy (Grilo)','Grilo Falante (Jiminy Cricket) é um personagem da Disney que apareceu pela primeira vez no filme Pinóquio (1940). Ele é um grilo sábio, educado e gentil, escolhido pela Fada Azul para ser a consciência de Pinóquio. Com seu guarda-chuva e cartola, Jiminy tenta guiar o boneco de madeira pelo caminho do bem, ensinando lições de moral e responsabilidade.','1940-02-07','Itália','Casaco preto, cartola azul, guarda-chuva','https://static.wikia.nocookie.net/tkoc/images/e/ef/Jiminy1.jpg/revision/latest?cb=20150131101601&path-prefix=pt-br','Grilo','Ward Kimball & Walt Disney'),
('Winnie the Pooh (Ursinho Pooh)','Pooh','Ursinho Pooh é um adorável urso de pelúcia criado pelo autor A.A. Milne e eternizado pela Disney. Ele vive no Bosque dos Cem Acres com seus amigos Leitão, Tigrão, Ió e Cristóvão Robin. Pooh é conhecido por seu jeito calmo, ingênuo e bondoso — e, claro, por seu amor incondicional por mel. Apesar de um pouco distraído, sempre demonstra lealdade e carinho, sendo um símbolo de amizade e inocência para crianças e adultos ao redor do mundo.','1966-02-04','Hundred Acre Wood','Camisa vermelha curta','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrUMxEmFJhuYak_L0H8o5HQO7scUKeYsKUcA&s','Urso','A. A. Milne'),
('Tinker Bell','Tink (Sininho)','Sininho é uma fada pequena e travessa que aparece na história de Peter Pan. Conhecida por seu brilho cintilante e seu jeito um pouco ciumento, Sininho é uma amiga fiel de Peter Pan e usa sua magia para ajudar nas aventuras na Terra do Nunca. Apesar de seu tamanho diminuto, ela tem uma personalidade forte e um coração corajoso.','1953-02-05','Neverland','Vestido verde de folhas','https://static.wikia.nocookie.net/disney/images/3/34/Profile_-_Tinker_Bell.jpg/revision/latest?cb=20240806035155&path-prefix=pt-br','Fada','Walt Disney & J.M. Barrie'),
('Donald Fauntleroy Duck','Donald','Pato Donald é um dos personagens mais famosos da Disney, criado em 1934. Ele é um pato branco de voz inconfundível, conhecido por seu temperamento explosivo, mas também por seu coração generoso. Donald é azarado, impaciente e frequentemente se mete em confusões, mas nunca desiste. Vive aventuras hilárias com seus sobrinhos Huguinho, Zezinho e Luizinho, além de seu tio Tio Patinhas e sua namorada Margarida.','1934-06-09','Estados Unidos','Uniforme de marinheiro azul','https://static.wikia.nocookie.net/disney/images/a/ab/Donald_Duck_Disney_1.png/revision/latest?cb=20180828172632','Pato','Walt Disney');
