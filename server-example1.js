//Ejemplo de servidor simple en NODE JS, que devuelve contenido en formato JSON 
const http = require("http");

const host = 'localhost';
const port = 8080;
let key = "Mensaje:";
let value = "Este es un ejemplo de respuesta JSON";

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "application/json"); //Para archivos CSV: "text/csv". Para contenido HTML: "text/html".
    res.writeHead(200);
    res.end(`{"${key}": "${value}"}`);
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`El servidor se inició correctamente en http://${host}:${port}`);
});