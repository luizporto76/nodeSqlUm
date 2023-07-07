const db = require('../models/index');
const Usuario = db.Usuario;
const Evento = db.Evento;

async function locEventoUsuario (EventoId){
    const evento = await Evento.findAll({
        where: {id: EventoId}, 
        include: [{
            model: Usuario,
        }],
        raw: true,
        nest: true
    })
    console.log(evento);
}

locEventoUsuario(1)