//external module express
const express = require('express');
//express function
const app = express();
//port
const port = 3001;
//get request at / path for then send a form to take name then send to greet url
app.get('/', (req, res) => {
    res.send(`
        <form action="/greet" method="get">
            <input type="text" name="name" placeholder="Enter your name" required>
            <button type="submit">Go to Greet</button>
        </form>`);});
//get request at /greet path for then send a greeting message
app.get('/greet', (req, res) => {
    const name = req.query.name;
    res.send(`<h1>HELLO MY BOY ${name}</h1>`);
});
//listen to port
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});