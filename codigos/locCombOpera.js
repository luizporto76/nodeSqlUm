const db = require('../models/index');
const Usuario = db.Usuario;
const Op = db.Sequelize.Op;

// Localiza apenas um registro. 

function locCombOpera (arrayTelefone){
    Usuario.findAll({
        //attributes: ['NomeUsuario', 'Clube'],
        where: {
            [Op.or]:[
                {
                    id:{
                        [Op.lte]:5
                    }
                },
                {
                    NomeUsuario:{
                        [Op.like]: '%o%'
                    }
                }
            ]
        },
        raw: true,
    }).then(Usuario => {
        console.log('\n\n\n');
        console.log(Usuario);
    })
}
locCombOpera();