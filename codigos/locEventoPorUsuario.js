const db = require('../models/index');
const Usuario = db.Usuario;
const Evento = db.Evento;

async function locEventoPorUsuario (usuarioId){
    const usuario = await Usuario.findAll({
        where: {id: usuarioId}, 
        include: [{
            model: Evento,
        }],
        raw: true,
        nest: true
    })
    console.log(usuario);
}

locEventoPorUsuario(2)