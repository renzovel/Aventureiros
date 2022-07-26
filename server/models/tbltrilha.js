'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbltrilha extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbltrilha.init({
    idtrilha: DataTypes.INTEGER,
    titulo: DataTypes.STRING,
    descrip: DataTypes.TEXT,
    clasifica: DataTypes.STRING,
    valor: DataTypes.DECIMAL,
    vagas: DataTypes.INTEGER,
    nivelrisgo: DataTypes.INTEGER,
    destino: DataTypes.STRING,
    publico: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
    datai: DataTypes.DATE,
    dataf: DataTypes.DATE,
    apagado: DataTypes.INTEGER,
    idusuario: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tbltrilha',
  });
  return tbltrilha;
};