const moduloA = require("../../151 - Utilizando modulos de terceiros/moduloA")
console.log(moduloA.ola)

const http = require("http")
http.createServer((req, res) => {
    res.write("Bom dia!")
    res.end()
}).listen(8080)