const express = require('express');
const ClassController = require('./controllers/Class');

const routes = express.Router();

routes.get('/aula1', ClassController.index);

module.exports = routes;
