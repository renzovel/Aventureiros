'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tblreserva extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tblreserva.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    data: DataTypes.DATEONLY,
    pago: DataTypes.INTEGER,
    apagado: DataTypes.INTEGER,
    idusuario: DataTypes.INTEGER,
    idtrilha: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tblreserva',
  });
  return tblreserva;
};