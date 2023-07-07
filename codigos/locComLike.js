const db = require('../models/index');
const Usuario = db.Usuario;
const Op = db.Sequelize.Op;

// Localiza apenas um registro. 

function locComLike (arrayTelefone){
    Usuario.findAll({
        //attributes: ['NomeUsuario', 'Clube'],
        where: {
            NomeUsuario:{
                [Op.like]: '%o%'
            }, 
        }, raw: true,

    }).then(Usuario => {
        console.log('\n\n\n');
        console.log(Usuario);
    })
}
locComLike();