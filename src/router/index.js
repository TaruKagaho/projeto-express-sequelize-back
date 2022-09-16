const express = require( "express" );

const alunoController = require( "../controllers/aluno" );

const router = express.Router();

router.post( "/alunos", alunoController.cadastrarNovoAluno );

module.exports = {
    router,
};
