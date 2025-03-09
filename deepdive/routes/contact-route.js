const express = require('express');
const path = require('path');
const rootDir = require('../utils/path-utils');
const contactRouter = express.Router();

contactRouter.get('/contact-us', (req, res) => {
    console.log('In the /contact-us route');
    res.sendFile(path.join(rootDir, 'views', 'contact-us.html'));
});

contactRouter.post('/contact-result', (req, res) => {
    console.log(`req.method`, req.method, req.body);
    console.log('In the /contact-result route');
    res.sendFile(path.join(rootDir, 'views', 'contact-result.html'));
});

module.exports = contactRouter;