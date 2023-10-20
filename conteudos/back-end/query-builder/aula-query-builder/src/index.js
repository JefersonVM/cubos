const express = require("express");
const knex = require("./conexao");

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
 const jeferson = {
    nome: 'Jeferson Vieira Moreira',
    email: 'jeferson3@gmail.com',
    telefone: '(11) 9 8245-1363'
 }

 const joao = {
    nome: 'João Vieira Moreira',
    email: 'joao@gmail.com',
    telefone: '(11) 9 8530-1363'
 }

 const agenda = await knex('agenda').insert([jeferson, joao]).returning('*');

    return res.json(agenda);

});

app.put('/:id', async (req, res) => {
   const {nome, email, telefone} = req.body;
   const {id} = req.params;
   
   const agendaAtualizada = await knex('agenda').update({nome, email, telefone}).where({id});
   return res.json(agendaAtualizada);
});

app.delete('/:id', async (req, res) => {

   const {id} = req.params;
   
   const agendaExcluida = await knex('agenda').del().where({id}).returning('id');
   return res.json(agendaExcluida);
});

app.listen(3000);
