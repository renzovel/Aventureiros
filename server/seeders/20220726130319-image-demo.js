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
    await queryInterface.bulkInsert('tblimages', [{
      id:1,
      url: 'https://aguaxterra.com.br/wp-content/uploads/2019/11/cachoeira-mais-alta-do-mundo-2-768x412.jpg',
      apagado: 0,
      idtrilha: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id:2,
      url: 'https://trilhandomontanhas.com/arquivos/2018-10/salto-angel-venezuela-media.jpg',
      apagado: 0,
      idtrilha: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('tblimages', null, {});
     */
    await queryInterface.bulkDelete('tblimages', null, {});
  }
};
