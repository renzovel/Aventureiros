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
      tbltrilhaId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id:2,
      url: 'https://www.proyectosparaconstruir.com/wp-content/uploads/2017/05/El_Pico_Bol%C3%ADvar.jpg',
      apagado: 0,
      tbltrilhaId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:3,
      url: 'https://th.bing.com/th/id/R.8087894fd27c30d5126dfe0d247c07e8?rik=6omPd%2bbYt4Q%2f2w&pid=ImgRaw&r=0',
      apagado: 0,
      tbltrilhaId: 3,
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
