const { DataTypes } = require( "sequelize" );

const { db } = require( "../database/connection" );

const Aluno = db.define( "aluno", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nome: {
        type: DataTypes.STRING( 100 ),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING( 50 ),
        allowNull: false,
        unique: true,
    },
    idade: {
        type: DataTypes.TINYINT,
    },
    genero: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefone: {
        type: DataTypes.STRING( 11 ),
    },
    estudante: {
        type: DataTypes.ENUM( "sim", "não" ),
        allowNull: false,
    },
} );

/**
 * Caso a tabela já existe ele a remove e cria novamente.
 * Portanto, executa-se apenas uma vez a linha abaixo.
 */
// Aluno.sync( { force: true } );

module.exports = {
    Aluno,
};
