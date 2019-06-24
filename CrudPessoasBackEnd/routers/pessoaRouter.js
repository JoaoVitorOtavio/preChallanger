var express = require('express')
var router = express.Router()
var PessoaModel = require('../model/pessoa/pessoa')
var RespostaClass = require('../model/RespostaClass')

router.get("/", function (req, res, next) {
    PessoaModel.getAll(function (erro, retorno) {
        let resposta = new RespostaClass();

        if (erro) {
            resposta.erro = true;
            resposta.msg = 'Ocorreu um erro';
            console.log('erro: ', erro)
        } else {
            resposta.dados = retorno
        }
        res.json(resposta);
    })
})

router.get("/:id?", function (req, res, next) {
    PessoaModel.getId(req.params.id, function (erro, retorno) {
        let resposta = new RespostaClass();

        if (erro) {
            resposta.erro = true;
            resposta.msg = "Ocorreu um erro";
            console.log("erro: ", erro);
        } else {
            resposta.dados = retorno;
        }
        res.json(resposta);
    })
})

router.get("/name/:name?", function (req, res, next) {
    PessoaModel.getByName(req.params.name, function (erro, retorno) {
        let resposta = new RespostaClass();

        if (erro) {
            resposta.erro = true;
            resposta.msg = "Ocorreu um erro";
            console.log("erro: ", erro);
        } else {
            resposta.dados = retorno;
        }
        res.json(resposta);
    })
})


router.get("/email/:email?", function (req, res, next) {
    PessoaModel.getByEmail(req.params.email, function (erro, retorno) {
        let resposta = new RespostaClass();

        if (erro) {
            resposta.erro = true;
            resposta.msg = "Ocorreu um erro";
            console.log("erro: ", erro);
        } else {
            resposta.dados = retorno;
        }
        res.json(resposta);
    })
})

router.post("/?", function (req, res, next) {
    PessoaModel.add(req.body, function (erro, retorno) {
        let resposta = new RespostaClass()
        if (erro) {
            resposta.error = true;
            resposta.message = 'Houve um erro';
            console.log("Erro: ", erro);
        } else {
            if (retorno.affectedRows > 0) {
                resposta.message = "Cadastro Concluido";
            } else {
                resposta.error = true;
                resposta.message = "Não foi possivel realizar a operação"
            }
        }
        console.log("Resposta: " + resposta)
        res.json(resposta);

    })
})

router.delete("/:id", function (req, res, next) {
    PessoaModel.remove(req.params.id, function (erro, retorno) {
        let resposta = new RespostaClass();
        console.log("BATEU NO DELETE ROUTER")
        if (erro) {
            resposta.erro = true;
            resposta.msg = 'Ocorreu um erro';
            console.log('erro: ', erro);
        } else {
            if (retorno.affectedRows > 0) {
                resposta.msg = "Deletado Com Sucesso!"
            } else {
                resposta.erro = true;
                resposta.msg = 'Houve um erro, nao deletado!'
                console.log('Erro: ')
                console.log(erro)
            }
        }
        console.log('resp: ', resposta);
        res.json(resposta);
    })
})

router.put("/", function (req, res, next) {
    PessoaModel.edit(req.body, function (erro, retorno) {
        let resposta = new RespostaClass();

        if (erro) {
            resposta.erro = true;
            resposta.msg = 'Ocorreu um erro';
            console.log('erro: ', erro);
        } else {
            if (retorno.affectedRows > 0) {
                resposta.msg = "Editado Com Sucesso!"
            } else {
                resposta.erro = true;
                resposta.msg = 'Houve um erro, Operação nao realizada!'
                console.log('Erro: ')
                console.log(erro)
            }
        }
        console.log('resp: ', resposta);
        res.json(resposta);
    })
})

module.exports = router;