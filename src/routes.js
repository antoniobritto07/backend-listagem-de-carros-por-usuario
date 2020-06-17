const express = require('express');
const routes = express.Router();
const UsersController = require('./controllers/UsersController');
const CarsController = require('./controllers/CarsController');
const AccessoriesController = require('./controllers/AccessoriesController');


routes.post('/users', UsersController.create);
routes.get('/users', UsersController.index);

routes.post('/cars', CarsController.create);
routes.get('/cars', CarsController.index);

routes.post('/accessories', AccessoriesController.create);
routes.get('/accessories', AccessoriesController.index);

module.exports = routes;