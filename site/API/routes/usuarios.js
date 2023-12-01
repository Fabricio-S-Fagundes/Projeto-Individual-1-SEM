var express = require("express");
var router = express.Router();

var usuarioController = require("../controller/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/cadastrarSkin", function (req, res) {
    usuarioController.cadastrarSkin(req, res);
});


module.exports = router;