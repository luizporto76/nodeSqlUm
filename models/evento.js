'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Evento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Evento.belongsTo(models.Usuario, {foreignKey: 'UserId'})
    }
  }
  Evento.init({
    NomeEvento: DataTypes.STRING,
    DataInicial: DataTypes.DATE,
    DataFinal: DataTypes.DATE,
    Endereco: DataTypes.STRING,
    Estado: DataTypes.STRING,
    Fly: DataTypes.STRING,
    Descricao: DataTypes.TEXT,
    UserId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Evento',
    tableName: 'Eventos'
  });
  return Evento;
};