const UserSchema = (sequelize, DataTypes) => {
  const UserTable = sequelize.define(
    "user",
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
  UserTable.associate = (models) => {
    UserTable.hasMany(models.sale, { foreignKey: 'userId' });
  };
  
  UserTable.associate = (models) => {
    UserTable.hasMany(models.sale, { foreignKey: 'sellerId' });
  };
  return UserTable;
};


module.exports = UserSchema;
