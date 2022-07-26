'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tblimage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tblimage.init({
    id: DataTypes.INTEGER,
    url: DataTypes.STRING,
    apagado: DataTypes.INTEGER,
    idtrilha: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tblimage',
  });
  return tblimage;
};