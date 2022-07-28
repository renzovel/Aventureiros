var express = require('express');
var router = express.Router();
const TblTrilhas = require('../models/tbltrilha');
const TblImages = require('../models/tblimage');
const { Connection, DataTypes} = require("./config");
const Trilhas = TblTrilhas(Connection, DataTypes);
const Images = TblImages(Connection, DataTypes);

//reation left join
Trilhas.hasMany(Images);

//mostrar todos 
router.get('/', async (req, res) => { 
    const AllTrilhas=await Trilhas.findAll({ include: Images });
    res.status(200).json({ action: 'Listing trilhas', data : AllTrilhas});
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