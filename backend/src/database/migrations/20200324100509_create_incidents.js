// Método up é usado para criar as tabelas do banco de dados
exports.up = function(knex) {
  return knex.schema.createTable('incidents', function (table) {
    table.increments();
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();
    table.string('ong_id').notNullable();
    table.foreign('ong_id').references('id').inTable('ongs');
  });
};

// Método down é usado no caso de haver algum erro na criação ou atualização da tabela
exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
