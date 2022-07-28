var express = require('express');
var router = express.Router();
const TblUsuarios = require('../models/tblusuario');
const { Connection, DataTypes} = require("./config");
const Usuarios = TblUsuarios(Connection, DataTypes);

const {tbltrilha, tblimage}= Connection.models;

//reation left join
Usuarios.hasMany(tbltrilha);
 
//mostrar todos 
router.get('/', async (req, res) => { 
    const AllUsuarios=await Usuarios.findAll({ include: [{model:tbltrilha}] });
    res.status(200).json({ action: 'Listing Usuarios', data : AllUsuarios});
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