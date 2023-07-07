'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {

    static associate(models) {

    }
  }
  Usuario.init({
    NomeUsuario: DataTypes.STRING,
    Clube: DataTypes.STRING,
    Telefone: DataTypes.STRING,
    Senha: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuario',
    tableName: 'Usuarios'
  });
  return Usuario;
};