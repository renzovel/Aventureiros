'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('tbltrilhas', [{
      id: 1,
      titulo: 'Salto Ángel ou Cataratas Ángel',
      descrip: 'O Salto Ángel ou Cataratas Ángel é o mais alto salto do mundo, com 979 metros de altura, gerada pela queda do rio Churún desde o Auyantepui, no Estado de Bolívar, sudeste da Venezuela, próximo da fronteira Brasil-Guiana. Seu nome é alusivo ao aviador estado-unidense James Crawford Angel.',
      clasifica: '1',
      valor: 20.15,
      vagas: 100,
      nivelrisgo: 1,
      destino: 'Parque Nacional de Canaima, Estado de Bolívar, Venezuela.',
      publico: 1,
      status: 1,
      datai: '2022/11/01 08:00:00',
      dataf: '2022/12/01 08:00:00',
      apagado: 0,
      tblusuarioId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('tbltrilhas', null, {});
     */
    await queryInterface.bulkDelete('tbltrilhas', null, {});
  }
};
