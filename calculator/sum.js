const requestsumhandler = (req, res) => {
    // confirm.log("In sum Request Handler",req.url);
    const body = [];
    req.on('data', (chunk) => {
        body.push(chunk);
    });
   req.on('end',()=>{
   const bodystr= Buffer.concat(body).toString();
   const params=new URLSearchParams(bodystr);
   const bodyobj=Object.fromEntries(params);
   const num1=parseInt(bodyobj.num1);
    const num2=parseInt(bodyobj.num2);
    const sum=num1+num2;
    console.log(num1,num2,sum);
    res.setHeader('Content-Type','text/html');
    res.write("<html>");
    res.write("<head><title>RESULT</title></head>");
    res.write("<body>");
    res.write("<h1> WELCOME TO RESULT</h1>");
    res.write("<h2> The sum of "+num1+" and "+num2+" is => "+sum+"</h2>");
    
 
 
    res.write("<a href='/'>Go Home</a>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
    
   })
}

exports.requestsumhandler = requestsumhandler;