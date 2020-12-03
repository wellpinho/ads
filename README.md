<h3 align="center">
  SQL no Node.js com Sequelize
</h3>

## 🚀 Tecnologias

- ⚡ Express — A web framework for Node.js
- 💾 Sequelize — SQL dialect ORM for Node.js

## ✋🏻 Pré-requisitos

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/pt-BR/docs/install)

## 🔥 Instalação e execução

1. Faça um clone desse repositório;
2. Entre na pasta `ads`;
3. Rode `yarn` para instalar as dependências;
4. Altere as credencias dentro de `/src/config/database-copy.js`;
5. Rode `yarn sequelize db:create` para criar o banco de dados;
6. Rode `yarn sequelize db:migrate` para executar as migrations;
7. Rode `yarn dev` para iniciar o servidor.

## AS urls usadas para o CRUD são:
1. Cursos: ``` http://localhost:400/cursos ``` GET, POST, PUT e DELETE
2. Turmas: ``` http://localhost:400/turmas ``` GET, POST, PUT e DELETE
3. Blocos: ``` http://localhost:400/cursos/:id/turma/:id/bloco ``` GET, POST, PUT e DELETE
4. Disciplina: ``` http://localhost:400/cursos/:id/turma/:id/bloco/:id/disciplina ``` GET, POST, PUT e DELETE


## ⚡️ Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

## 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Feito com 💖 by Wellingotn Pinho 👋 [Meu portfólio](https://wellpinho.com.br)
