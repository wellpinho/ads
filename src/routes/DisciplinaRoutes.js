const express = require('express')
const router = express.Router()
const disciplinaController = require('../controllers/DisciplinaController')

router.get('/curso/:id/turma/:id/bloco/:id/disciplina', disciplinaController.index)
router.get('/curso/:id/turma/:id/bloco/:id/disciplina', disciplinaController.show)
router.post('/curso/:id/turma/:id/bloco/:id/disciplina', disciplinaController.store)
router.put('/curso/:id/turma/:id/bloco/:id/disciplina', disciplinaController.update)
router.delete('/curso/:id/turma/:id/bloco/:id/disciplina', disciplinaController.delete)

module.exports = router