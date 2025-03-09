const http = require('http');
const {requesthandler} = require('./handler');
const server = http.createServer(requesthandler);
const port = 3000;
server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});