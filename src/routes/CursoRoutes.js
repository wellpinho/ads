const express = require('express')
const router = express.Router()
const cursoController = require('../controllers/CursoController')

router.get('/cursos', cursoController.index)
router.get('/cursos/:id', cursoController.show)
router.post('/cursos', cursoController.store)
router.put('/cursos/:id', cursoController.update)
router.delete('/cursos/:id', cursoController.delete)

module.exports = router