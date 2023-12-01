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

router.post("/countPosts", function (req, res) {
    postController.countPosts(req, res);
});

router.post("/analyticsGrafico1", function (req, res) {
    postController.analyticsGrafico1(req, res);
});

router.post("/analyticsGrafico2", function (req, res) {
    postController.analyticsGrafico2(req, res);
});

router.post("/analyticsKPI", function (req, res) {
    postController.analyticsKPI(req, res);
});


module.exports = router;