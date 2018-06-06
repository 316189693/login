const https = require('https');
const fs = require('fs');

const options = {
    key: fs.readFileSync('../cert/server_key.pem'),
    cert: fs.readFileSync('../cert/server_cert.pem')
};

https.createServer(options, (req, res) => {
    res.writeHead(200);
    res.end('zht hello world');
}).listen(8000);
