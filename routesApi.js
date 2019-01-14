const express = require('express');
const createUser = require('./methods').createUser;
const conx = require('./methods').connexion;

exports.routes = (function() {
    var router = express.Router();

    router.post('/create', createUser);
    router.post('/auth', conx);
    return router;
})();