'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tblreservas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      data: {
        type: Sequelize.DATE
      },
      pago: {
        type: Sequelize.INTEGER
      },
      apagado: {
        type: Sequelize.INTEGER
      },
      idusuario: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tblusuarios',
          key: 'id',
        }
      },
      idtrilha: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tbltrilhas',
          key: 'id',
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tblreservas');
  }
};