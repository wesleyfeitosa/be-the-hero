// Método up usado para criar a tabela no banco de dados 
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function(table) {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable(); 
  });
};

// Método down usado caso dê algum problema na criação da tabela
exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};
