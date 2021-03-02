//Ejemplo de servidor simple en NODE JS, que devuelve contenido en formato JSON 
const http = require("http");

const host = 'localhost';
const port = 8080;

const teachers = JSON.stringify([
    { nombre: "Allan Parkinson", telefono: "8985 0214", grado: "Lic." },
    { nombre: "Rebeca Diaz", telefono: "7214 2335", grado: "MSc." },
    { nombre: "Luis Castillo", telefono: "6545 2354", grado: "Ing." }
]);

const courses = JSON.stringify([
    { curso: "Introducción a la programación", estado : "abierto", inicio: "marzo" },
    { curso: "Diseño web con Adobe Photoshop", estado : "cerrado", inicio: "enero" },
    { curso: "Herramientas ofimáticas", estado : "suspendido", inicio: "febrero" }
]);

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "application/json"); 
    switch (req.url) {
        case "/docentes":
            res.writeHead(200);
            res.end(teachers);
            break;
        case "/cursos":
            res.writeHead(200);
            res.end(courses);
            break;
        default:
            res.writeHead(404);
            res.end(JSON.stringify({error:"La ruta no se encuentra disponible. Por favor, verifique."}));
    }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`El servidor se inició correctamente en http://${host}:${port}`);
});