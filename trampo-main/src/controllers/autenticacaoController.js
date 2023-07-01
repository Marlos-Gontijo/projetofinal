const Pessoa = require('../models/pessoa')
const Contas = require('../models/contaCorrente')
const Usuario = require('../models/usuario')

function loginView(req, res){
    pessoa = req.session.pessoa
    res.render("login.html", {pessoa});
}

async function autenticar(req, res) {
    const pessoa = await Pessoa.findOne({ where: { email: req.body.email, senha: req.body.senha} });
    const usuario = Usuario.findOne({ where: { fk_idPessoa: pessoa.idPessoa} });
    const contas = Contas.findAll({ where: { fk_idUsuario: usuario.idUsuario } });
    if (pessoa !== null) {    
        req.session.autorizado = true
        req.session.pessoa = pessoa
        req.session.conta = contas
        res.redirect('/')
    } else {
        let erro_autenticacao = true
        res.render('login.html', {erro_autenticacao})
    }
}

function sair(req, res) {
    req.session.destroy(function(err) {
        console.log('Usuário desautorizado')
     })
     let sucesso_saida = true
     res.render('login.html', {sucesso_saida})
}

function verificarAutenticacao(req, res, next) {
    if (req.session.autorizado){
        console.log('Usuário autorizado')
        next()
    }
    else{
        console.log('Usuário NÃO autorizado')
        res.redirect('/login')
    }
}

module.exports =  {
    loginView,
    autenticar,
    verificarAutenticacao,
    sair
};