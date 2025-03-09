const http=require('http');
const port =3000;
const server=http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers);
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
})
server.listen(port,(request,response)=>{
    console.log('server is running at http://localhost:${port}');
})