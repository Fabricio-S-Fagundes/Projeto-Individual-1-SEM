var database = require("../database/config")

function chamarPosts() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ")
    var instrucao = `
        SELECT * 
        FROM Postagem p
        JOIN usuario u
        ON p.fkUsuario = u.idUsuario
        LEFT JOIN skin s
        ON s.fkUsuario = u.idUsuario
        ORDER BY dtPost desc
        ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao

function inserirPost(fkUsuario, texto, img, nCurtidas) {

    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function inserirPost():");
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.

    var instrucao = `
        INSERT INTO postagem (idPost, fkUsuario, txtPostagem, imagem, dtPost, nCurtidas) VALUES (null, ${fkUsuario}, '${texto}', 'imagensPosts/${img}', default,'${nCurtidas = 0}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);

    // INSERT INTO skin VALUES(null,'${skin}', '${}')
}

module.exports = {
    chamarPosts,
    inserirPost
};