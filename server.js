
var http = require('http'),
    fs = require('fs');

const PORT = 8080;

function handleRequest(request, response){
    fs.readFile('./index.html', function(error, content) {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(content, 'utf-8');
    });
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});