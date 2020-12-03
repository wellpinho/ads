const { Model, DataTypes } = require('sequelize')

class Blocos extends Model {
  static init(sequelize) {
    super.init({
      curso_name: DataTypes.STRING,
      turma_id: DataTypes.INTEGER
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.Turma, { foreignKey: 'turma_id', as: 'turma'})
    this.hasMany(models.disciplinas, { foreignKey: 'bloco_id', as: 'disciplinas'})
  }
}

module.exports = Blocos
