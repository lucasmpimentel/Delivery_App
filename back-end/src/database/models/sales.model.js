const SaleSchema = (sequelize, DataTypes) => {
  const SaleTable = sequelize.define(
    'sale',
    {
      id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
      userId: DataTypes.INTEGER,
      sellerId: DataTypes.INTEGER,
      totalPrice: DataTypes.DECIMAL,
      deliveryAddress: DataTypes.STRING,
      deliveryNumber: DataTypes.STRING,
      saleDate: DataTypes.DATE,
      status: DataTypes.STRING
    },
    {
      underscored: true
    }
  );
  SaleTable.associate = (models) => {
    SaleTable.hasMany(models.salesProduct, { foreignKey: 'saleId' });
  };
  return SaleTable;
};

module.exports = SaleSchema;
