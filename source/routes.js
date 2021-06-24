const express = require('express');
const ClassController = require('./controllers/StudyClass');

const routes = express.Router();

routes.get('/:id', ClassController.index);

module.exports = routes;
