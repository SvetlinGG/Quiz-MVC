
const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');
const router = require('./routes/index,js');


const app = express();
const port = 6000;


app.listen(port, () => console.log(`Quiz MVC running on http://localhost:${port}`));

