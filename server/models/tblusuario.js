'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tblusuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tblusuario.init({
    id: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    confirmado: DataTypes.BOOLEAN,
    datan: DataTypes.DATE,
    foto: DataTypes.STRING,
    permissao: DataTypes.INTEGER,
    apagado: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'tblusuario',
  });
  return tblusuario;
};