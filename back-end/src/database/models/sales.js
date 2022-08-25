const Sales = (sequelize, DataTypes) => {
  const Sales = sequelize.define(
    'Sales',
    {
      id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
      userId: DataTypes.INTEGER,
      sellerId: DataTypes.INTEGER,
      totalPrice: DataTypes.DECIMAL,
      deliveryAddress: DataTypes.STRING,
      deliveryNumber: DataTypes.STRING,
      saleDate: DataTypes.DATE,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Sales',
    },
    {
      timestamps: false,
      underscore: true
    }
  );
  return Sales;
};

module.exports = Sales;
