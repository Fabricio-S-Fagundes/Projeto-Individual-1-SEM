var express = require("express");
var router = express.Router();

var postController = require("../controller/postController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/inserir", function (req, res) {
    postController.cadastrar(req, res);
})

router.post("/chamar", function (req, res) {
    postController.autenticar(req, res);
});

module.exports = router;