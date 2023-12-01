var postModel = require("../models/postModel");


function chamarPosts(req, res) {

        postModel.chamarPosts()
            .then(
                function (resultadoChamar) {
                    console.log(`\nResultados encontrados: ${resultadoChamar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoChamar)}`); // transforma JSON em String

                if (resultadoChamar) {
                        console.log(resultadoChamar);                   
                            res.json({
                                posts: resultadoChamar
                            }); 
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


function inserirPost(req, res) {

    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html

    var fkUsuario = req.body.fkUsuarioServer;
    var texto = req.body.textPostServer;
    var img = req.body.imgServer;
    var nCurtidas = req.body.nCurtidasServer;

    console.log(fkUsuario);
    console.log(texto);
    console.log(img);
    console.log(nCurtidas);

    // var skin = skinServer

    // Faça as validações dos valores

    if (texto == undefined || texto.trim() == "") {
        res.status(400).send("Sua publicação está vazia!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js

        postModel.inserirPost(fkUsuario, texto, img,
            nCurtidas)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar a publicação! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function analyticsGrafico1(req, res){

    postModel.analyticsGrafico1()
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar a analise Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}
function analyticsGrafico2(req, res){

    postModel.analyticsGrafico2()
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar a analise 2 Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function analyticsKPI(req, res){

    postModel.analyticsKPI()
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar a analise 3 Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );

}


module.exports = {
    chamarPosts,
    inserirPost,
    analyticsGrafico1,
    analyticsGrafico2,
    analyticsKPI
}