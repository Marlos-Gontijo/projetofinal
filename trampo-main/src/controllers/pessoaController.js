const Pessoa = require('../models/pessoa')

function cadastrarView(req, res){
    res.render("pessoa/cadastrar.html", {});
}

function cadastrarPessoa(req, res){
    let pessoa = {
        nomeCompleto: req.body.nomeCompleto,
        data_nascimento: req.body.data_nascimento,
        cpf: req.body.cpf,
        endereco: req.body.endereco,
        telefone: req.body.telefone,
        cep: req.body.cep,
        email: req.body.email,
        senha: req.body.senha,
    }
    
    Pessoa.create(pessoa).then((result)=>{
        res.render("pessoa/cadastrar.html", {pessoa});
    }).catch((err) => {
        console.log(err)
        let erro = err
        res.render("pessoa/cadastrar.html", {erro});
    })
}

function listarView(req, res){

    let sucesso_excluir = req.query.sucesso_excluir
    let erro_excluir = req.query.erro_excluir
    

    Pessoa.findAll().then((pessoas)=>{
        res.render("pessoa/listar.html", {pessoas, sucesso_excluir, erro_excluir});
    }).catch((err) => {
        console.log(err)
        let erro = err
        res.render("pessoa/listar.html", {erro});
    })
}

function editarView(req, res){
    let id = req.params.id
    let pessoa;
    Pessoa.findByPk(id).then(function(pessoa){
        res.render("pessoa/editar.html", {pessoa});
    })
}

function editarPessoa(req, res) {
    let pessoa = {
        nomeCompleto: req.body.nomeCompleto,
        data_nascimento: req.body.data_nascimento,
        cpf: req.body.cpf,
        endereco: req.body.endereco,
        telefone: req.body.telefone,
        cep: req.body.cep,
        email: req.body.email,
        senha: req.body.senha,
    }
    Pessoa.update(
      pessoa,
      {
        where: {
          id: req.body.id,
        },
      }
    ).then(function (sucesso) {
        res.render("pessoa/editar.html", {pessoa, sucesso});
    })
    .catch(function (erro) {
        res.render("pessoa/editar.html", {pessoa, erro})
    });

}

function excluirPessoa(req, res) {
   
    Pessoa.destroy(
      {
        where: {
          id: req.body.id,
        },
      }
    ).then(function (sucesso) {
        res.redirect("/pessoa/listar?sucesso_excluir=1");
    })
    .catch(function (erro) {
        res.redirect("/pessoa/listar?erro_excluir=1")
    });

}

module.exports =  {
    cadastrarView,
    cadastrarPessoa,
    listarView,
    editarView,
    editarPessoa,
    excluirPessoa,
};