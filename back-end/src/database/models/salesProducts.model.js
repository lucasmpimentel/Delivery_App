const SalesProductSchema = (sequelize, DataTypes) => {
  const SalesProductTable = sequelize.define(
    'salesProduct',
    {
      saleId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
    },
    {
      underscored: true,
      tableName: 'salesProducts',
    }
  );

  SalesProductTable.associate = (models) => {
    models.product.belongsToMany(models.sale, {
      as: 'Products', 
      through: SalesProductTable,
      foreignKey: "productId",
      otherKey: "saleId",
    });
    models.sale.belongsToMany(models.product, {
      as: 'Sales',
      through: SalesProductTable,
      foreignKey: "saleId",
      otherKey: "productId",
    });
  };
  return SalesProductTable;
};

module.exports = SalesProductSchema;
