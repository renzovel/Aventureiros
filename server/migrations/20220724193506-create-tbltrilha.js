'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tbltrilhas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        type: Sequelize.STRING
      },
      descrip: {
        type: Sequelize.STRING
      },
      clasifica: {
        type: Sequelize.STRING
      },
      valor: {
        type: Sequelize.DECIMAL
      },
      vagas: {
        type: Sequelize.INTEGER
      },
      nivelrisgo: {
        type: Sequelize.INTEGER
      },
      destino: {
        type: Sequelize.STRING
      },
      publico: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.INTEGER
      },
      datai: {
        type: Sequelize.DATEONLY
      },
      dataf: {
        type: Sequelize.DATEONLY
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
    await queryInterface.dropTable('tbltrilhas');
  }
};