const { Aluno } = require( "../models/Aluno.model" );

const cadastrarNovoAluno = async ( req, res ) => {
    try {
        const {
            nome,
            email,
            idade,
            genero,
            telefone,
            estudante,
        } = req.body;
        // console.log( { body: req.body } );
        // return res.status( 201 ).json( { body: req.body } );

        const novoAluno = await Aluno.create( {
            nome,
            email,
            idade,
            genero,
            telefone,
            estudante,
        } );

        return res.status( 201 ).json( { novoAluno: novoAluno } );
    } catch ( error ) {
        console.log( { Error: error.message } );
    }
};

const listarAlunosCadastrados = async ( req, res ) => {
    try {

    } catch ( error ) {
        console.log( { Error: error.message } );
    }
};

module.exports = {
    cadastrarNovoAluno,
};
