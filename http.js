const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write('Hey Hello');
        res.end('Welcome to our home page');
        res.write('Just checking!!');
    }
    if(req.url=='/about'){
        res.end('Welcome to our about page');
    }
    res.write(`<h1>Oops!</h1>
    <p>We cant find the page you are looking for</p>
    <a href="/">back to home</a>`);
});
server.listen(5000);

//response.write() writes the data to the response stream
//response.end() ends the respond the http response
//if we write anything after response.end() it will not be displayed
