const Pessoa = require('../models/movimentos')

function movimentosView(req, res){
    res.render("usuario/movimentos.html", {});
}

function movimentosView(req, res){
    let movimentos = {
        numeroConta: req.body.numeroConta,
        valor: req.body.valor,
    }
    
    movimentos.create(pessoa).then((result)=>{
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
};