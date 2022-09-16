const { Sequelize } = require( "sequelize" );

// Criando uma conexão com o nosso banco de dados.
// Parâmetros utilizados no Sequelize: database, usuário_db, senha_db, local, tipo.
const sequelize = new Sequelize( "javaGama", "root", "MySql01", {
	host: "localhost",
	dialect: "mysql",
} );

// Cria um módulo de conexão com o sequelize.
module.exports = {
	sequelize
};

// Criando um then/catch para verificar se conectou ao banco de dados.
sequelize.authenticate().then( function () {
	console.log( "Conexão com exito." );
} ).catch( function ( erro ) {
	console.log( "Erro de conexão " + erro.message + "." );
} );
