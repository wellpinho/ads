const express = require('express')
const router = express.Router()
const turmController = require('../controllers/TurmaController')

router.get('/turmas', turmController.index)
router.get('/turmas/:id', turmController.show)
router.post('/turmas', turmController.store)
router.put('/turmas/:id', turmController.update)
router.delete('/turmas/:id', turmController.delete)

module.exports = router