import knex from 'knex';
import path from 'path';

//migrations - controlam versao do banco de dados 

const db = knex({
    client: 'sqlite3',
    connection:{
        filename: path.resolve(__dirname, 'database.sqlite3')
    },
    useNullAsDefault: true,
});

export default db;