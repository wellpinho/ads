const express = require('express')
const router = express.Router()
const blocoController = require('../controllers/BlocoController')

router.get('/curso/:id/turma/:id/bloco', blocoController.index)
router.get('/curso/:id/turma/:id/bloco/:id', blocoController.show)
router.post('/curso/:id/turma/:id/bloco', blocoController.store)
router.put('/curso/:id/turma/:id/bloco/:id', blocoController.update)
router.delete('/curso/:id/turma/:id/bloco/:id', blocoController.delete)

module.exports = router