const SalesProducts = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define(
    'SalesProduct',
    {
      sale_id: DataTypes.INTEGER,
      product_id: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
    },
    {
      timestamps: false,
    }
  );

  SalesProducts.associate = (models) => {
    models.Products.belongsToMany(models.Sales, {
      as: 'Products', 
      through: SalesProducts,
      foreignKey: "product_id",
      otherKey: "sale_id",
    });
    models.Sales.belongsToMany(models.Products, {
      as: 'Sales',
      through: SalesProducts,
      foreignKey: "sale_id",
      otherKey: "product_id",
    });
  };
  return SalesProducts;
};

module.exports = SalesProducts;
