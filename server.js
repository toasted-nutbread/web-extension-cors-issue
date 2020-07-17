const http = require('http');

const requestListener = function (request, response) {
  response.writeHead(
    200,
    {
      'Access-Control-Allow-Origin': 'http://localhost',
      'Content-Type': 'application/json'
    }
  );
  response.write('{"test":"value"}');
  response.end();
}

const server = http.createServer(requestListener);
server.listen(8080);
