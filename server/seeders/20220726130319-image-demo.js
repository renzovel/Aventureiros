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
      url: 'https://trilhandomontanhas.com/arquivos/2018-10/salto-angel-venezuela-media.jpg',
      apagado: 0,
      tbltrilhaId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:3,
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Praia_da_Ponta_Negra_%28Manaus%29.jpg/1280px-Praia_da_Ponta_Negra_%28Manaus%29.jpg',
      apagado: 0,
      tbltrilhaId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:4,
      url: 'https://live.staticflickr.com/65535/51204260500_b9583b422a_b.jpg',
      apagado: 0,
      tbltrilhaId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:5,
      url: 'https://i0.wp.com/fioriempreendimentos.com.br/wp-content/uploads/2019/11/ilha-do-campeche-guia-sobre-paraiso-sul-ilha-fiori.jpg',
      apagado: 0,
      tbltrilhaId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:6,
      url: 'https://vidasemparedes.com.br/wp-content/uploads/2020/07/ilhadocampeche-vidasemparedes-3.jpg',
      apagado: 0,
      tbltrilhaId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:7,
      url: 'https://www.vidadeturista.com/wp-content/uploads/2021/02/embarcacoes-los-roques.jpg',
      apagado: 0,
      tbltrilhaId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:8,
      url: 'https://www.vidadeturista.com/wp-content/uploads/2021/02/o-que-fazer-em-los-roques.jpg',
      apagado: 0,
      tbltrilhaId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:9,
      url: 'https://jujunatrip.com/wp-content/uploads/2022/01/morro-pai-inacio-chapada-diamantina-7.jpg',
      apagado: 0,
      tbltrilhaId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:10,
      url: 'https://jujunatrip.com/wp-content/uploads/2022/01/fazenda-pratinha-chapada-diamantina.jpg',
      apagado: 0,
      tbltrilhaId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:11,
      url: 'https://static.wixstatic.com/media/2ac70c_59d29ff827fe46eaa4c9db92bf65c221~mv2.jpg/v1/fit/w_750,h_423,al_c,q_20,enc_auto/file.jpg',
      apagado: 0,
      tbltrilhaId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:12,
      url: 'https://www.trilhaseaventuras.com.br/wp-content/uploads/2021/12/lagoa-azul-lencois-maranhenses-758x569.jpg',
      apagado: 0,
      tbltrilhaId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:13,
      url: 'http://www.minec.gob.ve/wp-content/uploads/2017/09/llovizna1.jpg',
      apagado: 0,
      tbltrilhaId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:14,
      url: 'https://mundo-oriental.com/wp-content/uploads/2022/01/18562623.jpg',
      apagado: 0,
      tbltrilhaId: 7,
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