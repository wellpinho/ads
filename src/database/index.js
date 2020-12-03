const Sequelize = require('sequelize')
const dbconfig = require('./../config/database')

const Cursos =  require('./../models/CursoModel')
const Turmas =  require('./../models/TurmaModel')
const Blocos = require('./../models/BlocoModel')
const Disciplinas = require('./../models/DisciplinasModel')



const connection = new Sequelize(dbconfig)

Cursos.init(connection)
Turmas.init(connection)
Blocos.init(connection)
Disciplinas.init(connection)

// Cursos.associate(connection.models)
// Turmas.associate(connection.models)
// Blocos.associate(connection.models)
// Disciplinas.associate(connection.models)

module.exports = connection