'use strict';

const bootstrap = require('./server/bootstrap');
const register = require('./server/register');
const services = require('./server/services');
const routes = require('./server/routes');
const controllers = require('./server/controllers');
const config = require('./server/config');

module.exports = () => {
  return {
    bootstrap,
    config,
    routes,
    controllers,
    services,
    register,
  };
};
