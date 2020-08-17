import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('connections', table => {
        table.increments('id').primary();

        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE') //Caso alguma informação seja atualizada, sofre efeito cascata
            .onDelete('CASCADE');

        table.timestamp('created_at')
            .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
            .notNullable();

    });
} //Fazer alterações na tabela

export async function down(knex: Knex){
    return knex.schema.dropTable('connections');
} //Desfazer