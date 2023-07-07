const db = require('../models/index');
const Usuario = db.Usuario;

// Localiza apenas um registro. 

function locVariosIn (arrayTelefone){
    Usuario.findAll({
        attributes: ['NomeUsuario', 'Clube'],
        where: {
            Telefone: arrayTelefone, 
        }, raw: true,

    }).then(Usuario => {
        console.log('\n\n\n');
        console.log(Usuario);
    })
}
locVariosIn(['31986683420', '11111111']);