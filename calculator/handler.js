const {requestsumhandler} = require('./sum.js');
const requesthandler = (req,res)=>{
    console.log(req.url,req.method);
    if(req.url=="/"){
        res.setHeader('Content-Type','text/html');
        res.write("<html>");
        res.write("<head><title>Welcome</title></head>");
        res.write("<body>");
        res.write("<h1>Welcome to the Calculator</h1>");
        res.write("<a href='/calculator'>Go Calculator</a>");
        res.write("</body>");
        res.write("</html>");
        return res.end();
    }else if(req.url.toLowerCase()=="/calculator"){
        res.setHeader('Content-Type','text/html');
        res.write("<html>");
        res.write("<head><title>Calculator</title></head>");
        res.write("<body>");
        res.write("<h1>Calculator</h1>");
        res.write("<form action='/calculate-result' method='POST'>");
        res.write("<input type='text' name='num1' placeholder='Number 1'><br><br>");
        res.write("<input type='text' name='num2' placeholder='Number 2'><br><br>");
        res.write("<button type='submit'>Calculate</button>");
        res.write("</form>");
        res.write("<a href='/'>Go Home</a>");
        res.write("</body>");
        res.write("</html>");
        return res.end();

    }else if(req.url.toLowerCase()=="/calculate-result" && req.method=='POST'){
        // res.setHeader('Content-Type','text/html');
        // res.write("<html>");
        // res.write("<head><title>Welcome</title></head>");
        // res.write("<body>");
        // res.write("<h1>404 page does not exist</h1>");
        // res.write("<a href='/'>Go To Home</a>");
        // res.write("</body>");
        // res.write("</html>");
        // return res.end();
        return requestsumhandler(req,res);
    
    }else{
    res.setHeader('Content-Type','text/html');
    res.write("<html>");
    res.write("<head><title>Welcome</title></head>");
    res.write("<body>");
    res.write("<h1>404 page does not exist</h1>");
    res.write("<a href='/'>Go To Home</a>");
    res.write("</body>");
    res.write("</html>");
    return res.end();}
};

exports.requesthandler = requesthandler;