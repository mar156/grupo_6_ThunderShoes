'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.product, {through: 'image_product'});
    }
  };
  Image.init({
    file_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'image',
  });
  return Image;
};