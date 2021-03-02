//Ejemplo de servidor en NODE JS, que muestra página html desde archivo externo
const http = require("http");
const fs = require('fs').promises;

const host = 'localhost';
const port = 8080;

const requestListener = function (req, res) {
    fs.readFile(__dirname + "/index.html") //Reemplazar "/index.html" por la ruta del archivo que se desea cargar 
    .then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(contents);
        })
        .catch(err => {
            res.writeHead(500);
            res.end(err);
            return;
        });
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`El servidor se inició correctamente en http://${host}:${port}`);
});