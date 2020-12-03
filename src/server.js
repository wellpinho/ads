const express = require('express')
const app = express()

require('./database')

app.use(express.json())

const Cursos = require('./routes/CursoRoutes')
const Turmas = require('./routes/TurmaRoutes')
const Blocos = require('./routes/BlocoRoutes')
const Disciplina = require('./routes/DisciplinaRoutes')

app.use(Cursos)
app.use(Turmas)
app.use(Blocos)
app.use(Disciplina)

const PORT = 4000
app.listen(PORT, () => {
  console.log(`Running on: http://localhost:${PORT}`)
})