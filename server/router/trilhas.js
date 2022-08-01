var express = require('express');
var router = express.Router();
const TblTrilhas = require('../models/tbltrilha');
const TblImages = require('../models/tblimage');
const { Connection, DataTypes} = require("./config");
const Trilhas = TblTrilhas(Connection, DataTypes);
const Images = TblImages(Connection, DataTypes);
var path = require("path");

const multer  = require('multer');

//reation left join
Trilhas.hasMany(Images);


const upload = multer({ dest: path.resolve(`${__dirname}/../uploads/images/`)})

//mostrar todos 
router.get('/', async (req, res) => { 
    const AllTrilhas=await Trilhas.findAll({ include: Images });
    res.status(200).json({ action: 'Listing trilhas', data : AllTrilhas});
})

//cadastrar 
router.post('/', upload.array('tblimages', 20),  async (req, res, next) => {
    

    

    let data = JSON.parse(req.body.data);

    const CreateTrilha=await Trilhas.create({
        titulo: data.titulo,
        descrip: data.descrip,
        clasifica: '1',
        valor: data.valor,
        vagas: data.vagas,     
        nivelrisgo: data.nivelrisgo,     
        destino: data.destino,   
        publico: data.publico,     
        status: data.status,     
        datai: data.datai.replace("-","/")+" 08:00:00",     
        dataf: data.dataf.replace("-","/")+" 08:00:00",    
        apagado: 0,     
        tblusuarioId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
    });

    let imagens =await req.files.map((items, index)=>{
        return {
            url: items.filename,
            apagado: 0,
            tbltrilhaId: CreateTrilha.null,
            createdAt: new Date(),
            updatedAt: new Date()
        };
    })
    const InsertImagens = await Images.bulkCreate(imagens);
    const AllTrilhas=await Trilhas.findAll({ include: Images });
    res.status(200).json({ action: 'Listing trilhas', data : AllTrilhas});
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