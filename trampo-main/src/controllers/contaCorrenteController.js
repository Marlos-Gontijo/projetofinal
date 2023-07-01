const ContaCorrente = require('../models/contaCorrente')


function contaView(req, res){
    let conta;
    ContaCorrente.findByPk(req.body.idConta).then(function(conta){
        res.render("contaCorrente.html", {conta});
    })
}
function cadastroView(req, res){
    let idPessoa = req.body.idPessoa;
    res.render("CadastroConta.html", {conta});

}
// falta pegar os campos para adicionar no objeto
function cadastrarConta(req, res){
    let novoNumeroConta;
    ContaCorrente.max('numeroConta').then((maxNumeroConta) => {
        
        if (maxNumeroConta) {
          const maxNumero = parseInt(maxNumeroConta, 10);
          novoNumeroConta = (maxNumero + 1).toString().padStart(9, '0');
        } else {
          novoNumeroConta = '000000001';
    }});

    let conta = {
        fk_idUsuario: req.body.idUsuario,
        numeroConta: novoNumeroConta,
        nomeConta: req.body.nomeConta,
        dataAbertura: new Date(),
        saldo: req.body.saldo,
    }
    
    ContaCorrente.create(conta).then((result)=>{
        res.render("contaCorrente.html", {conta});
    }).catch((err) => {
        // console.log(err)
        // let erro = err
        // res.render("pessoa/cadastrar.html", {erro});
    })
}

function editarSaldo(req, res){
    ContaCorrente.findByPk(req.body.id).then(function(conta){
        let conta = {
            saldo: req.body.telefone,
        }
        ContaCorrente.update(
            conta,
            {
              where: {
                idConta: req.body.id,
              },
            }
          ).then(function (sucesso) {
                let contaAtualizada = ContaCorrente.findByPK();
              res.render("pessoa/editar.html", {contaAtualizada});
          })
          .catch(function (erro) {
            //   res.render("pessoa/editar.html", {pessoa, erro})
          });
    })
}

function listarContas(req, res){
    const conta = ContaCorrente.findOne({ where: { fk_idUsuario: req.body.nome } });
    if (conta !== null) {    
        res.render("pessoa/editar.html", {conta});
    } else {
        let nenhumaConta = true
        res.render('login.html', {nenhumaConta})
    }

}


module.exports =  {
    contaView,
    cadastrarConta,
    editarSaldo,
    listarContas, 
    cadastroView
};
