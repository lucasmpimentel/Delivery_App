const ProductSchema = (sequelize, DataTypes) => {
  const ProductTable = sequelize.define(
    'product',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: DataTypes.STRING,
      price: DataTypes.DECIMAL,
      url_image: DataTypes.STRING,
    },
    {
      timestamps: false,
    }
  );
  return ProductTable;
};

module.exports = ProductSchema;
