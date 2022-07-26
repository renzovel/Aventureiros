var express = require('express');
var cors = require('cors')
var app = express();
var PORT = 3001;
var trilhas = require('./router/thilas');

app.use(cors())

app.use('/api/trilhas', trilhas);

app.get("/api",(req, res)=>{
    res.send('Api-Rest Aventureiros');
});

app.listen(PORT,()=>{
    console.log(`
    API Server
        http://localhost:${PORT}/api/
    `);
});