const User = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'Users',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: { type: DataTypes.INTEGER, foreignKey: true },
      role: DataTypes.DATE,
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: 'users'
    }
  );
  return User;
};

module.exports = User;
