'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tblreservas', {
      idreserva: {
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
          key: 'idusuario',
        }
      },
      idtrilha: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tbltrilhas',
          key: 'idtrilha',
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