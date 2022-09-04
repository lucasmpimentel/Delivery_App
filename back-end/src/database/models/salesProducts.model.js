const SalesProductSchema = (sequelize, DataTypes) => {
  const SalesProductTable = sequelize.define(
    "salesProduct",
    {
      saleId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
    },
    {
      underscored: true,
      tableName: "sales_products",
    }
  );

  SalesProductTable.associate = (models) => {
    models.product.belongsToMany(models.sale, {
      as: "Products",
      through: SalesProductTable,
      foreignKey: "saleId",
      otherKey: "productId",
    });
    models.sale.belongsToMany(models.product, {
      as: "Sales",
      through: SalesProductTable,
      foreignKey: "productId",
      otherKey: "saleId",
    });
  };
  return SalesProductTable;
};

module.exports = SalesProductSchema;
