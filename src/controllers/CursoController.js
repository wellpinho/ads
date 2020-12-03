const Curso = require('./../models/CursoModel')

module.exports = {
  async index(req, res) {
    const cursos = await Curso.findAll()
    return res.json(cursos)
  },

  async show(req, res) {
    const { id } = req.params
    const curso = await Curso.findByPk(id)

    if (!curso) {
      return res.status(400).send('Nenhum curso encontrado')
    }

    return res.json(curso)
  },

  async store(req, res) {
    const { name } = req.body
    const curso = await Curso.create({ name })
    return res.json(curso)
  },

  async update(req, res) {
    const { id } = req.params
    const curso = req.body

    await Curso.update(curso, {where: {id: id}})
      .then(data => {
        return res.status(200).send('Atualizado com sucesso')
      })
      .catch(err => {
        return res.status(400).send(err)
      })
  },

  async delete(req, res) {
    const { id } = req.params
    const curso = await Curso.destroy({
      where: { id }
    })

    if (!curso) {
      return res.status(400).json({
        message: 'Erro ao remover curso'
      })
    }

    return res.json('Curso removido com sucesso')
  }

}