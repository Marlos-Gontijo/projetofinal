const Pessoa = require('../../models/pessoa')


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
        res.json({result});
    }).catch((err) => {
        console.log(err)
        res.json({err});
    })
}

module.exports =  {
    cadastrarPessoa,
};