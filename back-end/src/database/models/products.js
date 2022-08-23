const Products = (sequelize, DataTypes) => {
  const Products = sequelize.define(
    'Products',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: DataTypes.STRING,
      price: DataTypes.DECIMAL,
      url_image: { type: DataTypes.STRING, foreignKey: true },
      role: DataTypes.DATE,
    },
    {
      timestamps: false,
    }
  );
  return Products;
};

module.exports = Products;
