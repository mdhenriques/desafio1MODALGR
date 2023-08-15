require('dotenv').config({ path: '../config/.env' });
const mongoose = require('mongoose');
const urlBanco = process.env.MONGO_URI;
const nomeDoDb = 'nomedobanco';
const opcoesDeConexao = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: nomeDoDb,
}

mongoose.connect(urlBanco, opcoesDeConexao)
    .then(() => {
        console.log('Conectado ao banco de dados')
    })
    .catch(err => {
        console.error('Erro ao conectar no banco de dados', err)
    })

const db = mongoose.connection;

module.exports = db;