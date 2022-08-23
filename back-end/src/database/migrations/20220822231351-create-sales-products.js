'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SalesProducts', {
      sale_id: {
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'Sales',
          key: 'id',
        },
        type: Sequelize.INTEGER,
      },
      product_id: {
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'Products',
          key: 'id',
        },
        type: Sequelize.INTEGER,
      },
      quantity: {
        type: Sequelize.INTEGER,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('SalesProducts');
  },
};
