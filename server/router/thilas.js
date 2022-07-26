var express = require('express');
var router = express.Router();
const {Sequelize, DataTypes} = require("sequelize");
const TblTrilhas = require('../models/tbltrilha');
const Connection = new Sequelize({
    dialect: 'sqlite',
    storage: `${__dirname}/../database/dbaventureiros.db`
});

const Trilhas = TblTrilhas(Connection, DataTypes);
 
//mostrar todos 
router.get('/', async (req, res) => { 
    const AllTrilhas=await Trilhas.findAll();
    res.json({ action: 'Listing trilhas', data : AllTrilhas});
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