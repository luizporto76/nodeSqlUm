const db = require('../models/index');
const Usuario = db.Usuario;

function criarUsuario(){
    Usuario.create({
        NomeUsuario: 'Alan',
        Clube: 'MAXACALIS',
        Telefone: '11111111',
        Senha: '2222222',
    })
}
criarUsuario();