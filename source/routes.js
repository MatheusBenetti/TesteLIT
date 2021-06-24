const express = require('express');
const ClassController = require('./controllers/StudyClass');

const routes = express.Router();

routes.get('/:id', ClassController.index);
routes.post('/', ClassController.store);
routes.delete('/:id', ClassController.delete);
routes.put('/:id/watch', ClassController.classWatched);
routes.put('/:id/watched', ClassController.classNotWatched);

module.exports = routes;
