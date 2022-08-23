'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert(
      'Products',
      [
        {
          id: 1,
          name: 'Skol Lata 250ml',
          price: 'adm@deliveryapp.com',
          url_image: 'a4c86edecc5aee06eff8fdeda69e0d04',
        },
        {
          id: 2,
          name: 'Fulana Pereira',
          email: 'fulana@deliveryapp.com',
          password: '3c28d2b0881bf46457a853e0b07531c6',
          role: 'seller',
        },
        {
          id: 3,
          name: 'Cliente Zé Birita',
          email: 'zebirita@email.com',
          password: '1c37466c159755ce1fa181bd247cb925',
          role: 'customer',
        },
      ],
      { timestamps: false }
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  },
};


const products = [
	(1, 'Skol Lata 250ml',2.20, 'http://localhost:3001/images/skol_lata_350ml.jpg'),
	(2, 'Heineken 600ml',7.50, 'http://localhost:3001/images/heineken_600ml.jpg'),
	(3, 'Antarctica Pilsen 300ml',2.49, 'http://localhost:3001/images/antarctica_pilsen_300ml.jpg'),
	(4, 'Brahma 600ml',7.50, 'http://localhost:3001/images/brahma_600ml.jpg'),
	(5, 'Skol 269ml',2.19, 'http://localhost:3001/images/skol_269ml.jpg'),
	(6, 'Skol Beats Senses 313ml',4.49, 'http://localhost:3001/images/skol_beats_senses_313ml.jpg'),
	(7, 'Becks 330ml',4.99, 'http://localhost:3001/images/becks_330ml.jpg'),
	(8, 'Brahma Duplo Malte 350ml',2.79, 'http://localhost:3001/images/brahma_duplo_malte_350ml.jpg'),
	(9, 'Becks 600ml',8.89, 'http://localhost:3001/images/becks_600ml.jpg'),
	(10, 'Skol Beats Senses 269ml',3.57, 'http://localhost:3001/images/skol_beats_senses_269ml.jpg'),
	(11, 'Stella Artois 275ml',3.49, 'http://localhost:3001/images/stella_artois_275ml.jpg');
];
