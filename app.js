
const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');
const router = require('./routes/index,js');


const app = express();


app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));


app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: 'layout',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials')
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));


app.use('/', router);
const port = process.env.port || 6000
app.listen(port, () => console.log(`Quiz MVC running on http://localhost:${port}`));

