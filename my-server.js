var http = require('http');
http.createServer(function (req, res) {
    res.write('Manasa Manchineni from NodeJS!');
    res.end();
}).listen(3000, function(){
    console.log("Server running from port 3000");
}) 