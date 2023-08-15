const express = require('express');
const app = express();
const db = require('./db');
const rotasPadrao = require('./routes/rotasPadrao');
const rotasAdmin = require('./routes/rotasAdmin');

const porta = 3000;


app.use(express.json());
app.use('/rotasPadrao', rotasPadrao);
app.use('/rotasAdmin', rotasAdmin);

app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
});