const { Model, DataTypes } = require('sequelize')

class Turma extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      classe: DataTypes.STRING,
      turno: DataTypes.STRING,
      curso_id: DataTypes.INTEGER
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.Curso, { foreignKey: 'curso_id', as: 'curso'})
    this.hasMany(models.Blocos, { foreignKey: 'turma_id', as: 'blocos'})
  }
}

module.exports = Turma
