var database = require("../database/config")

function autenticar(username, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", username, senha)
    var instrucao = `
        SELECT idUsuario, nomeComp, email, dtNasc, username, senha FROM usuario WHERE username = '${username}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(nome, email, datnasc, username, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", username, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    
    var instrucao = `
        INSERT INTO usuario (idUsuario, nomeComp, email, dtNasc, username, senha) VALUES (null,'${nome}', '${email}', '${datnasc}', '${username}','${senha}');
        `;
        
    console.log("Executando a instrução SQL: \n" + instrucao);
    // console.log("Executando a instrução SQL: \n" + instrucaoSkin);

    return database.executar(instrucao);
}

function cadastrarSkin(skin){

    var insertSkin = `
    INSERT INTO skin (idSkin, arqSkin, fkUsuario) VALUES (null, 'imagensSkins/${skin}', (SELECT max(idUsuario) FROM usuario));
    `;

    console.log("Executando a instrução SQL: \n" + insertSkin);

    return database.executar(insertSkin);
}


module.exports = {
    autenticar,
    cadastrar,
    cadastrarSkin
};