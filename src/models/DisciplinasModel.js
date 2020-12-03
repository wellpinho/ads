const { Model, DataTypes } = require('sequelize')

class Disciplina extends Model {
  static init(sequelize) {
    super.init({
      disciplina: DataTypes.STRING,
      bloco_id: DataTypes.INTEGER
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.Bloco, { foreignKey: 'bloco_id', as: 'bloco'})
  }
}

module.exports = Disciplina