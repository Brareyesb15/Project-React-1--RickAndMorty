var http = require("http");
var characters = require("../utils/data")

const error = (res) =>  {res.statusCode = 404,
res.setHeader('Content-Type', 'text/plain'),
res.end("Route not found") }
const PORT = 3001;

http.createServer(function (req, res){
    console.log(`Server raisede in port ${PORT}`);
    let url = req.url.split("/");
    let id = Number(url.pop());
    let newUrl = url.join("/");
    if (newUrl === `/rickandmorty/character`){
     let prueba = false;
     characters.forEach(function(pjs){if (pjs.id === id) prueba = pjs })
     if (prueba) {res.writeHead(200,{
        "Content-Type" : 'application/json'})
        res.end( JSON.stringify(prueba) )}
     else {error(res)}
     }
     else if (req.url === "/rickandmorty/characters") {
        res.writeHead(200, { "Content-type": "application/json" });
        res.end(JSON.stringify(characters));
      } else {
        error(res);
      }


}).listen(PORT,() => {
    console.log(`http://localhost:${PORT}`) }); 


