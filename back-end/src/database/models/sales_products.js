const SalesProducts = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define(
    'SalesSalesProducts',
    {
      sale_id: DataTypes.INTEGER,
      product_id: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
    },
    {
      timestamps: false,
    }
  );
  return SalesProducts;
};

module.exports = SalesProducts;
