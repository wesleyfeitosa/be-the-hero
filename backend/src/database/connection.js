const knex = require('knex');
const configuration = require('../../knexfile');

// Aqui é feita a conexão com o banco de dados
const connection = knex(configuration.development);

module.exports = connection;
