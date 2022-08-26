const User = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'user',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: { type: DataTypes.INTEGER, foreignKey: true },
      role: DataTypes.STRING,
    },
    {
      timestamps: false,
    }
  );
  return User;
};

module.exports = User;
