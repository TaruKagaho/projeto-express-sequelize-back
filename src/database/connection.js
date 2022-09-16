const { Sequelize } = require( "sequelize" );

// Dados de conexão ao banco de dados.
const DB_NAME = "javaGama";
const DB_USER = "root";
const DB_PASSWORD = "MySql01";
const DB_CONFIG = {
    dialect: "mysql",
    host: "localhost",
    port: 3306,
};

// Objeto para guardar a conexão do banco de dados.
let db = {};

try {
    db = new Sequelize(
        DB_NAME,
        DB_USER,
        DB_PASSWORD,
        // @ts-ignore
        DB_CONFIG
    );
} catch ( error ) {
    console.log( { Error: error.message } );
}

function hasConnection() {
    db.authenticate().then( function () {
        console.log( "Conexão com exito." );
    } ).catch( function ( error ) {
        console.log( "Erro de conexão " + error.message + "." );
    } );
}

/* async function hasConnection() {
    try {
        await db.authenticate();

        console.log( "Conexão com exito." );
    } catch ( error ) {
        console.log( "Erro de conexão " + error.message + "." );
    }
} */

Object.assign( db, {
    hasConnection,
} );

module.exports = {
    db,
};
