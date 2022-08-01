var express = require('express');
var cors = require('cors')
var app = express();
var PORT = 3001;
var trilhas = require('./router/trilhas');
var usuarios = require('./router/usuarios');

app.use(cors());

app.use(express.json());

app.use('/api/trilhas', trilhas);
 
app.use('/api/usuarios', usuarios);

app.use(express.static('uploads'));

app.get("/api",(req, res)=>{
    res.send('Api-Rest Aventureiros');
});

app.listen(PORT,()=>{
    console.log(`
    API Server
        http://localhost:${PORT}/api/
    `);
});