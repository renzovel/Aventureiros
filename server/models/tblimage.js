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
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    url: DataTypes.STRING,
    apagado: DataTypes.INTEGER,
    tbltrilhaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tblimage',
  });
  return tblimage;
};