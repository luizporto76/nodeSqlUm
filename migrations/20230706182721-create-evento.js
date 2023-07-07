'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Eventos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      NomeEvento: {
        type: Sequelize.STRING
      },
      DataInicial: {
        type: Sequelize.DATE
      },
      DataFinal: {
        type: Sequelize.DATE
      },
      Endereco: {
        type: Sequelize.STRING
      },
      Estado: {
        type: Sequelize.STRING
      },
      Fly: {
        type: Sequelize.STRING
      },
      Descricao: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },

      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Usuarios',
          },
          key: 'id'
        }},
      





      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Eventos');
  }
};