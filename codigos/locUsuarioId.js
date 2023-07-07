const db = require('../models/index');
const Usuario = db.Usuario;

function locUsuarioId (id){
    Usuario.findByPk(id).then(Usuario =>{
        console.log('\n\n\n')
        //console.log(Usuario);
        console.log(JSON.stringify(Usuario))
    })
}
locUsuarioId(7);