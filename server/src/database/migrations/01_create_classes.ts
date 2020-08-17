import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('classes', table => {
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.decimal('cost').notNullable();

        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE') //Caso alguma informação seja atualizada, sofre efeito cascata
            .onDelete('CASCADE'); //Caso o user seja deletado, suas matérias tbm serão com o efeito cascata
    });
} //Fazer alterações na tabela

export async function down(knex: Knex){
    return knex.schema.dropTable('classes');
} //Desfazer