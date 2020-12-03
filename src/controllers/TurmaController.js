const Turma = require('./../models/TurmaModel')

module.exports = {
  async index(req, res) {
    const turma = await Turma.findAll()
    return res.json(turma)
  },

  async show(req, res) {
    const { id } = req.params
    const turma = await Turma.findByPk(id)

    if (!turma) {
      return res.status(400).send('Nenhum Turma encontrado')
    }

    return res.json(turma)
  },

  async store(req, res) {
    const { name, curso_id, classe, turno } = req.body
    const turma = await Turma.create({ name, curso_id, classe, turno })
    return res.json(turma)
  },

  async update(req, res) {
    const { id } = req.params
    const turma = req.body

    await Turma.update(turma, {where: {id: id}})
      .then(data => {
        return res.status(200).send('Atualizado com sucesso')
      })
      .catch(err => {
        return res.status(400).send(err)
      })
  },

  async delete(req, res) {
    const { id } = req.params
    const turma = await Turma.destroy({
      where: { id }
    })

    if (!turma) {
      return res.status(400).json({
        message: 'Erro ao remover curso'
      })
    }

    return res.json('Curso removido com sucesso')
  }

}