var express = require("express");
var router = express.Router();

var postController = require("../controller/postController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/inserirPost", function (req, res) {
    postController.inserirPost(req, res);
})

router.post("/chamarPosts", function (req, res) {
    postController.chamarPosts(req, res);
});

module.exports = router;