const Bloco = require('./../models/BlocoModel')

module.exports = {
  async index(req, res) {
    const bloco = await Bloco.findAll()
    return res.json(bloco)
  },

  async show(req, res) {
    const { id } = req.params
    const bloco = await Bloco.findByPk(id)

    if (!bloco) {
      return res.status(400).send('Nenhum curso encontrado')
    }

    return res.json(bloco)
  },

  async store(req, res) {
    const { turma_id, curso_name } = req.body
    const bloco = await Bloco.create({ turma_id, curso_name })
    return res.json(bloco)
  },

  async update(req, res) {
    const { id } = req.params
    const bloco = req.body

    await Bloco.update(bloco, {where: {id: id}})
      .then(() => {
        return res.status(200).send('Atualizado com sucesso')
      })
      .catch(err => {
        return res.status(400).send(err)
      })
  },

  async delete(req, res) {
    const { id } = req.params
    const bloco = await Bloco.destroy({
      where: { id }
    })

    if (!bloco) {
      return res.status(400).json({
        message: 'Erro ao remover curso'
      })
    }

    return res.json('Bloco removido com sucesso')
  }

}