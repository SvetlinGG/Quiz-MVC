const http = require('http');
const express = require('express');
const path = require('path');
const router = require('./routes/index,js');
const fileURLToPath = require('url');


// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const app = express();
const port = 6000;
const server = http.createServer((req, res) => {
    console.log('Hello Web Server');
    
})

app.get((req, res) => {
    res.write('Hello from my web server!');

    res.end();
});

app.listen(port, () => console.log(`Quiz MVC running on http://localhost:${port}`));

