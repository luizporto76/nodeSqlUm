const db = require('../models/index');
const Usuario = db.Usuario;

// Localiza apenas um registro. 

function locUsuarioNome (NomeUsuario){
    Usuario.findOne({
        attributes: ['NomeUsuario', 'Clube'],
        where: {
            NomeUsuario: NomeUsuario, 
        }, raw: true,

    }).then(Usuario => {
        console.log('\n\n\n');
        console.log(Usuario);
    })
}
locUsuarioNome('Ana');