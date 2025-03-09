const express = require('express');
const path = require('path');
const rootDir = require('../utils/path-utils');
const homeRouter = express.Router();

homeRouter.get('/', (req, res) => {
    console.log('In the / route');
    res.sendFile(path.join(rootDir, 'views', 'home.html'));
});

module.exports = homeRouter;