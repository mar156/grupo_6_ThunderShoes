'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category_user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.user);
    }
  };
  Category_user.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'category_user',
    tableName: 'category_user'
  });
  return Category_user;
};