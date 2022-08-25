const SalesProducts = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define(
    'SalesProduct',
    {
      saleId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
    },
    {
      timestamps: false,
      underscore: true
    }
  );

  SalesProducts.associate = (models) => {
    models.Products.belongsToMany(models.Sales, {
      as: 'Products', 
      through: SalesProducts,
      foreignKey: "productId",
      otherKey: "saleId",
    });
    models.Sales.belongsToMany(models.Products, {
      as: 'Sales',
      through: SalesProducts,
      foreignKey: "saleId",
      otherKey: "productId",
    });
  };
  return SalesProducts;
};

module.exports = SalesProducts;
