const db = require('../models/index');
const usuario = require('../models/usuario');
const Usuario = db.Usuario;

function atualizarUsuario(id){
    Usuario.update({
        Telefone: '00000000',
        Senha: 'dinovo2023',
    },{
        where:{
            id: id
        }
    }).then(Usuario => console.log(usuario))
}
atualizarUsuario(1);