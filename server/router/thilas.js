var express = require('express');
var router = express.Router();

//mostrar todos 
router.get('/', async (req, res) => {
    res.json({});
})

//cadastrar 
router.post('/', async (req, res) => {
    res.json({});
})

//mostrar apenas um
router.get('/:id', async (req, res) => {
    res.json({});
})

//atualizar um cadatro
router.put('/:id', async (req, res) => {
    //recebe um formulario
    res.json({});
})

//apagar um cadastro
router.delete('/:id', async (req, res) => {
    res.json({});
})

module.exports = router;