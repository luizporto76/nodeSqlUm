const db = require('../models/index');
const usuario = require('../models/usuario');
const Usuario = db.Usuario;

function excluirUsuario(id){
    Usuario.destroy({
        where:{
            id: id
        }
    })
}
excluirUsuario(1);