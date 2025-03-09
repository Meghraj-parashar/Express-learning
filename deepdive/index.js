const express = require('express');
const path = require('path');
const homeRouter = require('./routes/home-route');
const contactRouter = require('./routes/contact-route');
const app = express();
const port = 3000;

// FOR DATA ENCODING IN POST REQUEST
app.use(express.urlencoded({ extended: true }));

// Use the routers
app.use(homeRouter);
app.use(contactRouter);
app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

