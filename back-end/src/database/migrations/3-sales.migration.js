('use strict');
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sales', {
      id: {
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id',
        },
      },
      seller_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      total_price: {
        type: Sequelize.DECIMAL(9, 2),
      },
      delivery_address: {
        type: Sequelize.STRING(100),
      },
      delivery_number: {
        type: Sequelize.STRING(50),
      },
      status: {
        type: Sequelize.STRING,
        defaultValue: "Pendente",
      },
      sale_date: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('sales');
  },
};
