const express = require('express');
const axios = require('axios');

const app = express();

const instaciaAxios = axios.create({
    baseURL: 'http://localhost:3001'
    });

app.use(express.json());

app.get('/', async (req, res) => {
  //res.json(`Olá da api 1. Porta 3000`);

 // const resultado = await instaciaAxios.get('http://localhost:3001/carros');

 const {modelo, marca} = req.body;

 const resultado = await instaciaAxios.post('/carros',{modelo, marca});
    res.json(resultado.data);
});

app.listen(3000);