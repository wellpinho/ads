const { Model, DataTypes } = require('sequelize')

class Curso extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.hasMany(models.Turmas, { foreignKey: 'curso_id', as: 'turmas'})
  }
}

module.exports = Curso
