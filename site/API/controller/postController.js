var usuarioModel = require("../models/usuarioModel");
// var aquarioModel = require("../models/aquarioModel");

function autenticar(req, res) {
    var username = req.body.usernameLoginServer;
    var senha = req.body.senhaLoginServer;

    if (username == undefined) {
        res.status(400).send("Username não existe");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está errada");
    } else {

        usuarioModel.autenticar(username, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);                   
                            res.json({
                                id: resultadoAutenticar[0].idUsuario,
                                email: resultadoAutenticar[0].email,
                                username: resultadoAutenticar[0].username,
                                senha: resultadoAutenticar[0].senha
                            }); 
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Username e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var datnasc = req.body.datnascServer;
    var username = req.body.usernameServer;
    var senha = req.body.senhaServer;
    // var skin = skinServer

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está vazio!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está vazio!");
    } else if (datnasc == undefined) {
        res.status(400).send("Insira sua data de nascimento!");
    } else if (username == undefined) {
        res.status(400).send("Insira um nome de usuário!");
    } else if (senha == undefined){
        res.status(400).send("Insira uma senha para seu login!")
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, datnasc, username, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    autenticar,
    cadastrar
}