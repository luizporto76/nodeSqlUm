const db = require('../models/index');
const Usuario = db.Usuario;

function criarUsuario(){
    Usuario.create({
        NomeUsuario: 'THEO',
        Clube: 'MAXACALIS',
        Telefone: '31986683420',
        Senha: 'CAIU2019',
    })
}
criarUsuario();