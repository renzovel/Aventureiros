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
    },
    {
      id: 2,
      titulo: 'Praia da Ponta Negra',
      descrip: 'A Praia da Ponta Negra é uma praia urbana do município de Manaus, capital do estado do Amazonas. Localizada às margens do rio Negro, é um dos principais cartões-postais da cidade. Possui orla urbanizada, quadras para prática de esporte e um anfiteatro, onde são realizadas apresentações musicais, espetáculos teatrais e outras atrações, tornando-a um dos principais pontos turísticos da capital amazonense.',
      clasifica: '1',
      valor: 40.98,
      vagas: 100,
      nivelrisgo: 1,
      destino: 'Av. Cel. Teixeira, Ponta Negra, Manaus, AM Amazonas, Brasil',
      publico: 1,
      status: 1,
      datai: '2022/11/29 08:00:00',
      dataf: '2022/12/01 08:00:00',
      apagado: 0,
      tblusuarioId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 3,
      titulo: 'Ilha do Campeche',
      descrip: 'A Ilha do Campeche é uma ilha localizada em Florianópolis, próxima a ilha de Santa Catarina. Fica a cerca de 1,6 km ao leste da praia do Campeche, no Oceano Atlântico. Tem cerca de 1,6 km de comprimento no sentido norte-sul. Seu uso e conservação estão definidos na Portaria do IPHAN nº 691, de 23 de novembro de 2009.',
      clasifica: '1',
      valor: 55.20,
      vagas: 100,
      nivelrisgo: 1,
      destino: 'Em Florianópolis, próxima a ilha de Santa Catarina.',
      publico: 1,
      status: 1,
      datai: '2022/11/10 08:00:00',
      dataf: '2022/11/15 08:00:00',
      apagado: 0,
      tblusuarioId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 4,
      titulo: 'Los Roques',
      descrip: 'O arquipélago é um parque nacional. Apenas uma ilha, Gran Roque, é habitada. Não há nenhuma construção mais alta que dois andares. Os hotéis se chamam “posadas” (nenhuma tem mais que dez quartos). Não há carros. É como uma Caraíva, só que com o mar caribenho.',
      clasifica: '1',
      valor: 20.15,
      vagas: 100,
      nivelrisgo: 1,
      destino: 'Parque Nacional de Los Roques, 160 quilómetros a norte de Caracas, Venezuela.',
      publico: 1,
      status: 1,
      datai: '2022/11/01 08:00:00',
      dataf: '2022/11/10 08:00:00',
      apagado: 0,
      tblusuarioId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 5,
      titulo: 'Chapada Diamantina',
      descrip: 'Chapada Diamantina é uma região de serras, protegida na categoria de parque nacional, situada no centro do estado brasileiro da Bahia, onde nascem quase todos os rios das bacias do Paraguaçu, do Jacuípe e do Rio de Contas. Estas correntes de águas brotam nos cumes e deslizam pelo relevo em belos regatos, despencam em borbulhantes cachoeiras e formam transparentes piscinas naturais. O parque nacional é administrado pelo Instituto Chico Mendes de Conservação da Biodiversidade.',
      clasifica: '1',
      valor: 24.99,
      vagas: 100,
      nivelrisgo: 1,
      destino: 'Bahia, Brasil',
      publico: 1,
      status: 1,
      datai: '2022/11/01 08:00:00',
      dataf: '2022/12/05 08:00:00',
      apagado: 0,
      tblusuarioId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 6,
      titulo: 'Parque Nacional dos Lençóis Maranhenses',
      descrip: 'O Parque Nacional dos Lençóis Maranhenses é uma área protegida na costa atlântica norte do Brasil. É conhecido pela sua vasta paisagem desértica de grandes dunas de areia branca e pelas lagoas sazonais de água da chuva. A Lagoa Azul e a Lagoa Bonita são duas das maiores lagoas. O ecossistema diversificado do parque inclui pântanos de mangais. As cidades vizinhas de Barreirinhas e Santo Amaro do Maranhão servem de porta de entrada para o parque.',
      clasifica: '1',
      valor: 99.00,
      vagas: 100,
      nivelrisgo: 1,
      destino: 'Barreirinhas, Maranhao, Brasil',
      publico: 1,
      status: 1,
      datai: '2022/10/01 08:00:00',
      dataf: '2022/10/07 08:00:00',
      apagado: 0,
      tblusuarioId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 7,
      titulo: 'Llovizna Park (Parque La Llovizna)',
      descrip: 'Paisagem de ilhas arborizadas conectadas por pontes e rochedos íngremes, com a exuberante Cascata La Llovizna. O Parque La Llovizna tem uma área de aproximadamente 200 hectares, composta por ilhas, cachoeiras do rio Caroní, inúmeros caminhos de pedra e trilhas naturais, áreas arborizadas e áreas verdes, onde convivem livremente diversas espécies de vida selvagem, que podem ser apreciadas ou interagir com alguns deles.',
      clasifica: '1',
      valor: 34.15,
      vagas: 100,
      nivelrisgo: 1,
      destino: 'Guayana 8051, Bolívar, Venezuela',
      publico: 1,
      status: 1,
      datai: '2022/12/01 08:00:00',
      dataf: '2022/12/22 08:00:00',
      apagado: 0,
      tblusuarioId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 8,
      titulo: 'Pico Bolivar',
      descrip: 'É um pico que constitui o ponto mais alto da Venezuela. Situado na Cordilheira de Mérida, parte da Cordilheira dos Andes',
      clasifica: '2',
      valor: 150.15,
      vagas: 50,
      nivelrisgo: 1,
      destino: 'Estado Merida Venezuela.',
      publico: 1,
      status: 1,
      datai: '2022/11/01 08:00:00',
      dataf: '2022/12/01 08:00:00',
      apagado: 0,
      tblusuarioId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 9,
      titulo: 'Parque Nacional O Ávila',
      descrip: 'O Parque Nacional de Ávila, oficialmente conhecido como Parque Nacional Waraira Repano por seu nome de nome indígena Cariban, protege parte da cordilheira da Costa Central, na região costeira do centro-norte da Venezuela. A maior elevação da área é o Pico Naiguatá, a 2.765 metros acima do nível do mar.',
      clasifica: '1',
      valor: 40.15,
      vagas: 70,
      nivelrisgo: 1,
      destino: 'Caracas, Venezuela.',
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
