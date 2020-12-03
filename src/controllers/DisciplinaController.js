const Disciplina = require('./../models/DisciplinasModel')

module.exports = {
  async index(req, res) {
    const disciplina = await Disciplina.findAll()
    return res.json(disciplina)
  },

  async show(req, res) {
    const { id } = req.params
    const disciplina = await Disciplina.findByPk(id)

    if (!disciplina) {
      return res.status(400).send('Nenhum curso encontrado')
    }

    return res.json(disciplina)
  },

  async store(req, res) {
    const { bloco_id, disciplina } = req.body
    const disc = await Disciplina.create({ bloco_id, disciplina })
    return res.json(disc)
  },

  async update(req, res) {
    const { id } = req.params
    const disciplina = req.body

    await Disciplina.update(disciplina, {where: {id: id}})
      .then(() => {
        return res.status(200).send('Atualizado com sucesso')
      })
      .catch(err => {
        return res.status(400).send(err)
      })
  },

  async delete(req, res) {
    const { id } = req.params
    const disciplina = await Disciplina.destroy({
      where: { id }
    })

    if (!disciplina) {
      return res.status(400).json({
        message: 'Erro ao remover curso'
      })
    }

    return res.json('Bloco removido com sucesso')
  }

}