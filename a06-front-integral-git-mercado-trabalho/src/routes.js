const express = require("express");
const user = require('./controllers/user');

const roteador = express();

roteador.get('/user/:id', user.getProfile);

module.exports = roteador;