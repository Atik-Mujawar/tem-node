const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end('Welcome to our Home page')
    }
    if(req.url === '/about'){
        res.end('this is our about page')
    }
    res.end(`
    <h1>Oops!</h1>
<p>We can't seem to find the page you are looking for</p>
<a href="/">GoBack</a>
    `)
});

server.listen(5000)