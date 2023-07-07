const evento = require("../models/evento");
const db = require('../models/index');
const Usuario = db.Usuario;
const Evento = db.Evento;

async function addEventoUsuario (evento){
    const eventoCriado = await Evento.create(evento);
    console.log('\n\n\n');
    console.log(eventoCriado);
}

addEventoUsuario({
    NomeEvento: '2º ENCONTRO BJG',
    DataInicial: '01-04-2024',
    DataFinal: '03-04-2024',
    Endereco: 'Rua Mermu lugar',
    Estado: 'Minas Gerais',
    Fly: 'url do fly ',
    Descricao: 'afadf fasfsdfa afasdfasf afasfasdf asfasdfas afasdfasdf afasdfasdf',
    UserId: 3
})