const Sales = (sequelize, DataTypes) => {
  const Sales = sequelize.define(
    'Sales',
    {
      id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
      user_id: DataTypes.INTEGER,
      seller_id: DataTypes.INTEGER,
      total_price: DataTypes.DECIMAL,
      delivery_address: DataTypes.STRING,
      delivery_number: DataTypes.STRING,
      sale_date: DataTypes.DATE,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Sales',
    },
    {
      timestamps: false,
    }
  );
  return Sales;
};

module.exports = Sales;
